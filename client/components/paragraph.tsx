import { cn } from "@/lib/utils";
import type { PropsWithChildren, ReactNode } from "react";

export const SubParagraph = ({
  children,
  className = "",
  ...props
}: { className?: string; [key: string]: any } & PropsWithChildren) => (
  <div className={cn("*:leading-relaxed px-4", className)} {...props}>
    {children}
  </div>
);
