import { cva, type VariantProps } from "class-variance-authority"

import { cvaColors } from '@/styles/colors'

export type ButtonVariant = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center",
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
        small: "h-[30.75px] px-1.25 text-[13px]/[1.75]",
        medium: "h-[36.5px] px-1.5 text-[13px]/[1.75]",
        large: "h-[42.25px] px-2.75 text-[15px]/[1.75]",
      },
      color: {
        ...cvaColors,
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
