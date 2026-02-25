import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef, useImperativeHandle, useRef } from 'react'

import { X } from 'lucide-react'

import { Input as InputPrimitive } from '@/components/primitives/input'
import { Label } from '@/components/ui/input/label'
import { cn } from '@/lib/utils'

import { inputVariants } from './input.variants'

type InputProps = {
  label?: string
  showClearButton?: boolean
}

type Props = ComponentPropsWithoutRef<typeof InputPrimitive>
  & InputProps

type Ref = ComponentRef<typeof InputPrimitive>

export const Input = forwardRef<Ref, Props>(
  ({ label, showClearButton = true, ...props }, ref) => {
    const { color, size, variant, className } = props

    const innerRef = useRef<Ref>(null);
    useImperativeHandle(ref, () => innerRef.current as Ref);

    const handleClear = () => {
      const inputEl = innerRef.current as HTMLInputElement | null
      if (inputEl) {
        inputEl.value = ''
        inputEl.focus()
      }
    }

    return (
      <fieldset className="group relative">
        <InputPrimitive
          ref={innerRef}
          className={cn(inputVariants({ variant, size, color }), className)}
          {...props}
        />
        <Label variant={variant} color={color}>{label}</Label>
        {showClearButton && (
          <X
            className={`
              size-5 text-grey-200 cursor-pointer 
              absolute right-2 top-1/2 -translate-y-1/2 
              hover:text-grey-400
            `}
            onClick={handleClear}
          />
        )}
      </fieldset>
    )
  }
)
Input.displayName = 'Input'
