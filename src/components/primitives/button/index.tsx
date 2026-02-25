import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from "react";

import { Button as BaseButton } from "@base-ui/react/button";

import { cn } from "@/lib/utils";

import { buttonVariants, type ButtonVariant } from "./button.variants";

type Props = ComponentPropsWithoutRef<typeof BaseButton> & ButtonVariant;
type Ref = ComponentRef<typeof BaseButton>

export const Button = forwardRef<Ref, Props>(
  ({ className, size, variant, color, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ size, variant, color }), className)}
        {...props}
      />
    );
  }
)
Button.displayName = "Button";
