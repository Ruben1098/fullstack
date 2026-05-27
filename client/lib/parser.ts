export default (content: any[]) =>
  content.map(handler).filter(Boolean).join("\n");

const serializeDirectiveProps = (props: Record<string, any>) =>
  Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, "&quot;")}"`)
    .join(" ");

const getBlockProps = (block: {
  name: string;
  type?: string;
  text?: string;
  props?: { [key: string]: any };
  [key: string]: any;
}) => {
  const { name, type, text, props, ...rest } = block;

  return {
    ...rest,
    ...(props || {}),
  };
};

const handler = (
  block:
    | {
        name: string;
        type?: string;
        text?: string;
        props?: { [key: string]: any };
        [key: string]: any;
      }
    | string,
): string => {
  if (typeof block === "string") return block;
  if (Array.isArray(block)) return block.map(handler).join("\n");

  const blockProps = getBlockProps(block);
  const type = block.type || block?.props?.type;
  if (["open", "close"].includes(type))
    return `::${block.name}{${serializeDirectiveProps(
      Object.assign({ type }, blockProps),
    )}}`;

  if (block.props?.children) {
    const { children, ...props } = blockProps;

    return `::${block.name}{${serializeDirectiveProps(
      Object.assign({ type: "open" }, props),
    )}}\n${children.map(handler).join("\n")}\n::${block.name}{${serializeDirectiveProps(
      Object.assign({ type: "close" }, props),
    )}}`;
  }

  if (typeof block.text === "string")
    return Object.keys(blockProps).length > 0
      ? `::${block.name}[${block.text}]{${serializeDirectiveProps(blockProps)}}`
      : `:${block.name}[${block.text}]`;

  if (Object.keys(blockProps).length > 0) {
    const directive = `::${block.name}{${serializeDirectiveProps(blockProps)}}`;

    if (block.name === "Image") {
      console.debug("[parser] leaf Image block", {
        input: block,
        output: directive,
      });
    }

    return directive;
  }

  return "";
};
