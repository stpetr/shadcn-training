import type { ComponentProps, FC } from 'react'

import { Input as InputPrimitive } from '@/components/primitives/input'
import { Label } from '@/components/ui/input/label'
import { cn } from '@/lib/utils'

import { inputVariants } from './input.variants'

type Props = ComponentProps<typeof InputPrimitive>
  & { label?: string }

export const Input: FC<Props> = (props) => {
  const { label, color, size, variant, className } = props
  return (
    <fieldset className="group relative">
      <InputPrimitive
        className={cn(inputVariants({ variant, size, color }), className)}
        {...props}
      />
      <Label variant={variant} size={size} color={color}>{label}</Label>
    </fieldset>
  )
}
