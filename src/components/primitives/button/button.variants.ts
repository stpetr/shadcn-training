import { cva, type VariantProps } from "class-variance-authority";

import { controlSizes } from '@/styles/control-sizes';

export type ButtonVariant = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center ",
    "font-medium uppercase cursor-pointer",
    "rounded-sm whitespace-nowrap transition-all outline-none focus-visible:ring-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        text: [
          "text-(--main)",
          "hover:bg-(--main)/10",
          "active:bg-(--main)/40",
          "disabled:text-grey-600",
        ],
        contained: [
          "bg-(--main) text-(--contrast)",
          "hover:bg-(--dark)",
          "active:bg-(--main)",
          "disabled:bg-grey-400 disabled:text-grey-800",
          "ring-(--main)",
        ],
        outlined: [
          "border border-(--light) text-(--main)",
          "hover:bg-(--main)/10 hover:border-(--dark)",
          "active:text-(--dark)",
          "disabled:border-grey-400 disabled:text-grey-600",
        ],
      },
      size: {
        ...controlSizes,
      },
      color: {
        primary: [
          "[--dark:var(--color-primary-dark)]",
          "[--main:var(--color-primary-main)]",
          "[--light:var(--color-primary-light)]",
          "[--contrast:var(--color-primary-contrast)]",
          "[--tint:var(--color-primary-tint)]",
          "focus-visible:ring-pink-600/35", // needed?
        ],
        secondary: [
          "[--dark:var(--color-secondary-dark)]",
          "[--main:var(--color-secondary-main)]",
          "[--light:var(--color-secondary-light)]",
          "[--contrast:var(--color-secondary-contrast)]",
          "[--tint:var(--color-secondary-tint)]",
          "focus-visible:ring-indigo-600/35",
        ],
        error: [
          "[--dark:var(--color-error-dark)]",
          "[--main:var(--color-error-main)]",
          "[--light:var(--color-error-light)]",
          "[--contrast:var(--color-error-contrast)]",
          "[--tint:var(--color-error-tint)]",
          "focus-visible:ring-indigo-600/35",
        ],
        warning: [
          "[--dark:var(--color-warning-dark)]",
          "[--main:var(--color-warning-main)]",
          "[--light:var(--color-warning-light)]",
          "[--contrast:var(--color-warning-contrast)]",
          "[--tint:var(--color-warning-tint)]",
          "focus-visible:ring-indigo-600/35",
        ],
        success: [
          "[--dark:var(--color-success-dark)]",
          "[--main:var(--color-success-main)]",
          "[--light:var(--color-success-light)]",
          "[--contrast:var(--color-success-contrast)]",
          "[--tint:var(--color-success-tint)]",
          "focus-visible:ring-indigo-600/35",
        ],
        info: [
          "[--dark:var(--color-info-dark)]",
          "[--main:var(--color-info-main)]",
          "[--light:var(--color-info-light)]",
          "[--contrast:var(--color-info-contrast)]",
          "[--tint:var(--color-info-tint)]",
          "focus-visible:ring-indigo-600/35",
        ],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "text",
      color: "primary",
      size: "medium",
    },
  },
);
