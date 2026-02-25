import { cva, type VariantProps } from "class-variance-authority";

import { cvaColors } from '@/styles/colors'

export type InputVariant = VariantProps<typeof inputVariants>;

export const inputVariants = cva(
  [
    "text-base",
  ],
  {
    variants: {
      variant: {
        outlined: [
          "border border-grey-400 rounded-sm",
          "hover:border-black/75",
          "focus:outline-2 focus:outline-(--main) focus:border-transparent",
        ],
        filled: [
          "rounded-t-sm bg-black/6 border-b border-b-black/25",
          "hover:bg-black/9 hover:border-b-black/75",
          "focus:bg-black/6 focus:outline-none focus:border-b-2 focus:border-b-(--main)"
        ],
        standard: [
          "bg-grey-400",
        ],
      },
      size: {
        small: "h-10 px-1.25",
        medium: "h-14 px-1.5",
      },
      color: {
        ...cvaColors,
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "outlined",
      color: "primary",
      size: "medium",
    },
  },
);
