import { cva, type VariantProps } from "class-variance-authority";

import { cvaColors } from '@/styles/colors'

export type InputVariant = VariantProps<typeof inputVariants>;

export const inputVariants = cva(
  [
    "px-3",
    "not-focus:placeholder-transparent"
  ],
  {
    variants: {
      variant: {
        outlined: [
          ""
        ],
        filled: [
          ""
        ],
        standard: [
          ""
        ],
      },
      size: {
        small: "",
        medium: "",
      },
      color: {
        ...cvaColors,
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        size: "small",
        class: "h-12 pt-4",
      },
      {
        variant: "filled",
        size: "medium",
        class: "pt-5",
      }
    ],
    defaultVariants: {
      variant: "outlined",
      color: "primary",
      size: "medium",
    },
  },
);
