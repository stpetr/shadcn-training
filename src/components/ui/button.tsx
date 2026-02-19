import type { ComponentProps, FC } from 'react'

import { cn } from '@/lib/utils'

import { Button as ButtonPrimitive } from '@/components/primitives/button'

export type Props = ComponentProps<typeof ButtonPrimitive> & {
  loading?: boolean
}

export const Button: FC<Props> = ({loading, children, ...props}) => {
  const spinnerClass =
    props.size === 'small' ? 'h-3 w-3' : props.size === 'large' ? 'h-5 w-5' : 'h-4 w-4';
  
  return (
    <ButtonPrimitive
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
