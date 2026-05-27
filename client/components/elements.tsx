import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

export const elements = [
  "Image",
  "H1",
  "H2",
  "H3",
  "H4",
  "P",
  "LI",
  "UL",
  "OL",
  "A",
];

export const Image = ({
  className = "",
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => <img className={cn("", className)} {...props} />;

export const H1 = ({
  children,
  className = "",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <h1
    className={cn("text-2xl lg:text-3xl font-black text-black", className)}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({
  children,
  className = "",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <h2
    className={cn(
      "text-xl lg:text-2xl font-bold leading-normal  flex flex-row items-center justify-start gap-x-1.5 lg:gap-x-5",
      className,
    )}
    {...props}
  >
    <div className="size-2.5 bg-brand rounded-full mb-1 -ml-0.5 mask-[radial-gradient(closest-side,black_30%,transparent_70%)]" />
    {children}
  </h2>
);

export const H3 = ({
  children,
  className = "",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <h3
    className={cn(
      "text-xl  font-semibold italic leading-normal",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({
  children,
  className = "",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <h4
    className={cn("text-xl font-bold italic leading-none!", className)}
    {...props}
  >
    {children}
  </h4>
);

export const P = ({
  children,
  className = "",
  type,
  ...props
}: { className?: string; type?: string; [key: string]: any } & PropsWithChildren) => {
  // When used as a container directive (::P{type="open"}…::P{type="close"}),
  // react-markdown passes type="open" via hProperties. A <p> cannot contain
  // block-level children (h2, h3, nested p), so we render a <div> instead.
  if (type === 'open') {
    return (
      <div
        className={cn("opacity-75 leading-normal m-0 text-left", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
  return (
    <p
      className={cn(
        "opacity-75 leading-normal inline m-0 text-left",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const LI = ({
  children,
  className = "flex flex-row items-center justify-start",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <li className={cn("mb-2", className)} {...props}>
    {children}
  </li>
);

export const UL = ({
  children,
  className = "",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <div className="flex flex-row items-center justify-start mt-1">
    <div className="h-1 w-1 mx-2 bg-foreground/100 rounded-full" />
    <ul
      className={cn("", className)}
      {...props}
    >
      {children}
    </ul>
  </div>
);

export const OL = ({
  children,
  className = "",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <ol className={cn("mb-4 ml-6 list-decimal", className)} {...props}>
    {children}
  </ol>
);

export const A = ({
  href,
  children,
  className = "",
  ...props
}: {
  href?: string;
  className?: string;
  [key: string]: any;
} & PropsWithChildren) => (
  <a
    href={href}
    className={cn("text-blue-600 hover:underline", className)}
    {...props}
  >
    {children}
  </a>
);

export const XSeparator = ({
  className = "",
  ...props
}) => (
  <div 
    className={cn(
      "border-l border-gray-300 h-full mask-[radial-gradient(closest-side,black_30%,transparent_70%)]", 
      className
    )}  
    {...props}
  />
);

export const YSeparator = ({

  className = "",
  ...props
}) => <div className={cn("border-t border-gray-300 w-full mask-[radial-gradient(closest-side,black_30%,transparent_70%)]", className)}  {...props}/>;


export const Bold = ({

  className = "",
  ...props
}) => <strong className={cn("font-bold text-black", className)}  {...props}/>;


export default { Image, H1, H2, H3, H4, P, LI, UL, OL, A, XSeparator, YSeparator };
