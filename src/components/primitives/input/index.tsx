import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react'

import { Input as BaseInput} from '@base-ui/react/input'

import { cn } from "@/lib/utils"

import { inputVariants, type InputVariant } from './input.variants'

type Props = Omit<ComponentPropsWithoutRef<typeof BaseInput>, 'size'> & InputVariant
type Ref = ComponentRef<typeof BaseInput>

export const Input = forwardRef<Ref, Props>(
  ({ className, variant, size, color, placeholder, ...props }, ref) => (
    <BaseInput
      ref={ref}
      data-slot="input"
      placeholder={placeholder || ' '}
      className={cn(inputVariants({ variant, size, color }), className, 'peer')}
      {...props}
    />
  )
)
Input.displayName = 'Input'
