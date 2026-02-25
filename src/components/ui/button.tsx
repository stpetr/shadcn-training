import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { Button as ButtonPrimitive } from '@/components/primitives/button'

type Props = ComponentPropsWithoutRef<typeof ButtonPrimitive> & {
  loading?: boolean
}
type Ref = ComponentRef<typeof ButtonPrimitive>

export const Button = forwardRef<Ref, Props>(
  ({loading, children, ...props}, ref) => {
    const spinnerClass =
      props.size === 'small' ? 'h-3 w-3' : props.size === 'large' ? 'h-5 w-5' : 'h-4 w-4';

    return (
      <ButtonPrimitive
        ref={ref}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className={cn(spinnerClass, "animate-spin rounded-full border-2 border-current border-t-transparent")} />
          </span>
        )}
        <span className={loading ? 'invisible' : ''}>
          {children}
        </span>
      </ButtonPrimitive>
    );
  }
)
Button.displayName = 'Button'
