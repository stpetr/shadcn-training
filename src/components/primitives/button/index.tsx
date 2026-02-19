import { cn } from "@/lib/utils";
import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps, FC } from "react";
import { buttonVariants, type ButtonVariant } from "./button.variants";

type Props = ComponentProps<typeof BaseButton> & ButtonVariant;

export const Button: FC<Props> = ({ className, size, variant, color, ...props }) => {
  return (
    <BaseButton
      data-slot="button"
      className={cn(buttonVariants({ size, variant, color }), className)}
      {...props}
    />
  );
}
