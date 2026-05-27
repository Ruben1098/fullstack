import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkElements from "@/lib/remark";

import { Row, Table, Separator } from "@/components/Table";
import { Shell, Slide, Box } from "@/components/containers";
import elements, { Bold, Image as MarkdownImage, YSeparator, XSeparator } from "@/components/elements";
import { SubParagraph } from "@/components/paragraph";
import { InlineMath, MathML } from "@/components/mathml";

import type { ReactNode } from "react";

const stripNode =
    <T extends { node?: unknown }>(Component: (props: any) => ReactNode) =>
    ({ node, ...props }: T) => <Component {...props} />,
  stripComponents = (components: Record<string, any>) =>
    Object.fromEntries(
      Object.entries(components).map(([key, value]) => [key, stripNode(value)]),
    );

const markdownComponents = Object.assign({}, elements, {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1
      className="text-3xl font-bold opacity-85 text-black dark:text-white"
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
    >
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => {
    const id = children
      ?.toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    return (
      <h2
        className="text-2xl font-bold opacity-85 text-black dark:text-white"
        id={id}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-xl font-semibold opacity-85 text-black dark:text-white">
      {children}
    </h3>
  ),
  p: ({ node, children }: { node?: any; children?: React.ReactNode }) => {
    const hasText = node?.children?.some((c: any) => c.type === "text");

    const hasInline = node?.children?.some(
      (c: any) => c.type === "element" && c.tagName === "em", // opzionale
    );

    // Se NON c'è testo e NON ci sono inline → unwrap
    if (!hasText && !hasInline) {
      return <>{children}</>;
    }

    return <p className="leading-relaxed opacity-75">{children}</p>;
  },
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-4 ml-6 list-disc">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-4 ml-6 list-decimal">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="mb-2">{children}</li>
  ),
  code: ({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) => {
    const isInline = !className?.includes("language-");
    return isInline ? (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ) : (
      <code className="block bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto">
        {children}
      </code>
    );
  },
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    // Check if it's an affiliate link (you can customize this logic)
    const isAffiliate =
      href?.includes("affiliate") ||
      href?.includes("ref=") ||
      href?.includes("?tag=");

    return (
      <a
        href={href}
        className={`text-blue-600 hover:underline ${isAffiliate ? "font-semibold" : ""}`}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        {isAffiliate && (
          <span className="text-xs text-orange-600 ml-1">(Affiliate)</span>
        )}
      </a>
    );
  },
  Image: MarkdownImage,
  br: () => <br />,
  MathML,
  InlineMath,
  Box,
  Shell,
  Slide,
  Table,
  Row,
  SubParagraph,
  Separator,
  YSeparator,
  XSeparator,
  Bold
});

export default ({ content, ...props }: { content: string }) => (
  <ReactMarkdown
    {...props}
    remarkPlugins={[remarkDirective, remarkElements, remarkGfm]}
    components={stripComponents(markdownComponents) as any}
  >
    {content}
  </ReactMarkdown>
);
