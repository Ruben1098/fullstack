import React, { type PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkElements from "@/lib/remark";
import elements from "@/components/elements";
import { Shell, Slide, Box } from "@/components/containers";
import { SubParagraph } from "@/components/paragraph";
import { InlineMath, MathML } from "@/components/mathml";
import { cn } from "@/lib/utils";

// Primary API props shared by all subcomponents
type BaseProps = { className?: string } & PropsWithChildren;

// horizontal separator props
interface SeparatorProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /** how many columns the separator should span; defaults to a large number */
  span?: number;
}

const stripNode =
  <T extends { node?: unknown }>(Component: (props: any) => React.ReactNode) =>
  ({ node, ...props }: T) => <Component {...props} />;

const stripComponents = (
  components: Record<string, (props: any) => React.ReactNode>,
) =>
  Object.fromEntries(
    Object.entries(components).map(([key, value]) => [key, stripNode(value)]),
  );

const tableCellMarkdownComponents = stripComponents(
  Object.assign({}, elements, {
    MathML,
    InlineMath,
    Box,
    Shell,
    Slide,
    SubParagraph,
    p: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
  }),
) as any;

// root table component
const Table: React.FC<BaseProps> & {
  Row: React.FC<BaseProps>;
  Col: React.FC<BaseProps>;
  Separator: React.FC<SeparatorProps>;
} = ({ children, className = "", ...props }) => {
  // if the caller has provided a <table> already (e.g. markdown generated one),
  // we don't want to nest another <table> around it.
  const childrenArray = React.Children.toArray(children);
  const containsTable = childrenArray.some(
    (child) =>
      React.isValidElement(child) &&
      ((typeof child.type === "string" && child.type === "table") ||
        (child.type as any)?.displayName === "Table"),
  );

  // automatically interleave separators between Row elements
  const withSeparators: React.ReactNode[] = [];
  childrenArray.forEach((child, idx) => {
    withSeparators.push(child);
    if (
      React.isValidElement(child) &&
      (child.type === Row || (child.type as any)?.displayName === "Row") &&
      idx < childrenArray.length - 1
    ) {
      withSeparators.push(<Separator key={`sep-${idx}`} />);
    }
  });

  return containsTable ? (
    children
  ) : (
    <table
      className={cn(
        "w-full grid grid-cols-1 auto-rows-fr gap-1.5 grid-flow-row",
        className,
      )}
      {...props}
    >
      {withSeparators}
    </table>
  );
};

const Row: React.FC<BaseProps> = ({ children, className = "", ...props }) => {
  // helper to flatten only nested arrays, preserving React elements
  const normalizeChildren = (node: React.ReactNode): React.ReactNode[] => {
    if (node == null) return [];
    if (Array.isArray(node)) return node.flatMap(normalizeChildren);
    if (React.isValidElement(node) && node.type === React.Fragment)
      return normalizeChildren((node.props as any)?.children);
    return [node];
  };

  const isCellNode = (node: React.ReactNode) =>
    React.isValidElement(node) &&
    (typeof node.type === "string"
      ? node.type === "td"
      : (node.type as any)?.displayName === "Col");

  const splitMixedNodesIntoCellGroups = (nodes: React.ReactNode[]) => {
    const groups: React.ReactNode[][] = [[]];

    const pushSeparator = () => {
      if (groups[groups.length - 1].length > 0) groups.push([]);
    };

    nodes.forEach((node) => {
      if (node == null || node === false) return;

      if (typeof node === "string") {
        const chunks = node.split(/\r?\n|\|/);
        chunks.forEach((chunk, index) => {
          const text = chunk.trim();
          if (text) groups[groups.length - 1].push(text);
          if (index < chunks.length - 1) pushSeparator();
        });
        return;
      }

      if (
        React.isValidElement(node) &&
        typeof node.type === "string" &&
        node.type === "br"
      ) {
        pushSeparator();
        return;
      }

      groups[groups.length - 1].push(node);
    });

    return groups.filter((group) => group.length > 0);
  };

  let items = normalizeChildren(children);

  if (
    items.length === 1 &&
    React.isValidElement(items[0]) &&
    !isCellNode(items[0])
  ) {
    const unwrapped = normalizeChildren((items[0].props as any)?.children);
    if (unwrapped.length > 0) items = unwrapped;
  }

  let content: React.ReactNode;
  const makeCols = (values: React.ReactNode[]) =>
    values.map((value, index) => <Col key={index}>{value}</Col>);
  const primitiveItems = items.filter(
    (item) => typeof item === "string" || typeof item === "number",
  ) as Array<string | number>;
  const onlyPrimitives = primitiveItems.length === items.length;

  if (
    onlyPrimitives &&
    primitiveItems.length === 1 &&
    typeof primitiveItems[0] === "string"
  ) {
    const str = primitiveItems[0] as string;
    const parts = str
      .split(/\r?\n|\||,/) // newline, pipe or comma
      .map((p) => p.trim())
      .filter((p) => p !== "");
    if (parts.length > 1) {
      content = makeCols(parts);
    } else {
      content = makeCols([str]);
    }
  }

  // if content still undefined (or not set above appropriately), handle
  if (content === undefined) {
    if (onlyPrimitives) {
      content = makeCols(primitiveItems);
    } else {
      const grouped = splitMixedNodesIntoCellGroups(items);
      if (grouped.length > 1) {
        content = makeCols(
          grouped.map((group) =>
            group.length === 1 ? group[0] : <>{group}</>,
          ),
        );
      } else {
        content = items.map((item, index) => {
          if (isCellNode(item)) {
            return React.cloneElement(item as React.ReactElement, {
              key: (item as React.ReactElement).key ?? index,
            });
          }

          if (item === false || item == null) return null;

          return <Col key={index}>{item}</Col>;
        });
      }
    }
  }

  return (
    <tr
      className={cn("grid grid-rows-1 auto-cols-fr grid-flow-col", className)}
      {...props}
    >
      {content}
    </tr>
  );
};

const Col: React.FC<BaseProps> = ({ children, className = "", ...props }) => {
  const renderCellContent = () => {
    if (typeof children === "number") return children;
    if (typeof children === "string") {
      return (
        <ReactMarkdown
          remarkPlugins={[remarkDirective, remarkElements, remarkGfm]}
          components={tableCellMarkdownComponents}
        >
          {children}
        </ReactMarkdown>
      );
    }
    return children;
  };

  return (
    <td className={cn("col-span-1", className)} {...props}>
      {renderCellContent()}
    </td>
  );
};

const Separator: React.FC<SeparatorProps> = ({
  span = 1000,
  className = "",
  ...props
}) => (
  <tr className={cn("border-t-2 border-gray-300", className)} {...props}>
    <td colSpan={span} />
  </tr>
);

// attach subcomponents to Table for convenient namespace usage
Table.Row = Row;
Table.Col = Col;
Table.Separator = Separator;

// display names for debugging/element detection
Table.displayName = "Table";
Row.displayName = "Row";
Col.displayName = "Col";
Separator.displayName = "Separator";

export { Table, Row, Col, Separator };
export default Table;
