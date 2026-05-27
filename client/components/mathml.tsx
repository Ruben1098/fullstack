import katex from "katex";
import { cn, unwrapRoot } from "@/lib/utils";

// 1. DEFINIZIONE OPZIONI (Con Macro \root)
const KATEX_OPTIONS = {
  throwOnError: false,
  strict: true,
  macros: {
    "\\red": "\\textcolor{#ef4444}",
    "\\black": "\\textcolor{#0f0f0f}",
    "\\root": "\\sqrt[#1]{#2}",
  },
};

// 2. FORMATTER (Protegge le radici dalle quadre automatiche)
const autoFormatLatex = (latex) => {
  if (!latex || typeof latex !== "string") return latex;

  let formatted = "\\displaystyle " + latex.trim();

  return (
    formatted
      // Parentesi tonde
      .replace(/(?<!\\)\(\s*/g, "\\left(")
      .replace(/\s*(?<!\\)\)/g, "\\right)")
      // Parentesi quadre (Ignora se c'è sqrt o root prima)
      .replace(/(?<!sqrt)(?<!root)(?<!\\)\[\s*/g, "\\left[")
      .replace(/\s*(?<!\\)\]/g, "\\right]")
      // Graffe
      .replace(/\\\{\s*/g, "\\left\\{")
      .replace(/\s*\\\}/g, "\\right\\}")

      .replace(/(?<!\\)\|(.+?)(?<!\\)\|/g, "\\left|$1\\right|")
  );
};

// 3. COMPONENTI
export const MathML = ({ children, className = "", ...props }) => {
  const processedChildren = autoFormatLatex(children);

  const html = katex.renderToString(processedChildren, {
    ...KATEX_OPTIONS,
    output: "html",
    displayMode: true,
  });

  return (
    <span
      className={cn(
        "text-base [&:where(#box_*)]:text-lg text-katex font-bold inline-block contrast-110 opacity-100! drop-shadow-foreground/65 mx-auto dark:w-4 leading-none *:contents *:m-0!",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
};

export const InlineMath = ({
  children,
  mathML = true,
  className = "",
  ...props
}) => {
  const processedChildren = autoFormatLatex(children);

  const html = katex.renderToString(processedChildren, {
    ...KATEX_OPTIONS,
    output: "html",
    displayMode: false,
  });

  return (
    <span
      className={cn(
        "relative text-lg font-bold inline-block contrast-110 opacity-100! drop-shadow-foreground/65 text-katex ",
        className,
      )}
      {...props}
    >
      {mathML && (
        <MathML className="sr-only" aria-hidden="true">
          {children}
        </MathML>
      )}
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </span>
  );
};
