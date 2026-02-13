import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-white/60 bg-white/75 p-6 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/70",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
