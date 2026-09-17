import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold tracking-[0.03em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background text-foreground hover:border-primary hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary px-7 text-primary-foreground shadow-elevated hover:-translate-y-0.5 hover:bg-primary/90",
        editorial: "h-9 border border-primary/35 bg-transparent px-2 text-[9px] uppercase tracking-[0.14em] text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground sm:text-[10px]",
        filter: "shrink-0 border border-border bg-card px-4 text-[10px] tracking-[0.12em] text-muted-foreground hover:border-primary hover:text-primary",
        filterActive: "shrink-0 border border-primary bg-primary px-4 text-[10px] tracking-[0.12em] text-primary-foreground",
        imageIcon: "rounded-full border border-border/70 bg-background/90 text-foreground shadow-soft backdrop-blur hover:bg-background hover:text-primary",
        floating: "rounded-full bg-primary px-4 text-xs text-primary-foreground shadow-floating hover:-translate-y-0.5 hover:bg-primary/90",
        footer: "border border-footer-foreground/30 bg-transparent text-footer-foreground hover:bg-footer-foreground hover:text-footer",
        thumbnail: "overflow-hidden border border-transparent bg-muted hover:border-primary",
        size: "border border-border bg-background text-foreground hover:border-primary",
        sizeActive: "border border-primary bg-primary text-primary-foreground",
        whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-soft hover:bg-whatsapp/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-7",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
export { Button, buttonVariants };
