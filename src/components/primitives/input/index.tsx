import type { ComponentProps, FC } from 'react'

import { Input as BaseInput} from '@base-ui/react/input'

import { cn } from "@/lib/utils"

import { inputVariants, type InputVariant } from './input.variants'

type Props = Omit<ComponentProps<typeof BaseInput>, 'size'> & InputVariant

export const Input: FC<Props> = ({ className, variant, size, color, placeholder, ...props }) => {
  return (
    <BaseInput
      data-slot="input"
      placeholder={placeholder || ' '}
      className={cn(inputVariants({ variant, size, color }), className, 'peer')}
      {...props}
    />
  )
}
