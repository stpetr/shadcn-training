import { cva, type VariantProps } from "class-variance-authority";

import { cvaColors } from '@/styles/colors'

export type LabelVariant = VariantProps<typeof labelVariants>;

export const labelVariants = cva(
  [
    "absolute left-2 top-1/2 -translate-y-1/2",
    "h-auto",
    "text-grey-600",
    "origin-left pointer-events-none transition-all duration-200 ease-in-out",
  ],
  {
    variants: {
      variant: {
        outlined: [
          "bg-white",
          "group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:scale-[0.75] group-focus-within:text-(--main)",
          "peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:scale-[0.75]",
        ],
        filled: [
          "group-focus-within:group-focus-within:-translate-y-6 group-focus-within:scale-[0.75] group-focus-within:text-(--main)",
          "peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-[0.75]",
        ],
        standard: [
          "bg-grey-400",
        ],
      },
      color: {
        ...cvaColors,
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "outlined",
      color: "primary",
    },
  },
);
