import type { FC, ReactNode } from 'react'

import { labelVariants, type LabelVariant } from './label.variants'

type Props = {
  children: ReactNode;
} & LabelVariant

export const Label: FC<Props> = (props) => {
  const { children, variant, color } = props
  return (
    <label className={labelVariants({ variant, color })}>{children}</label>
  )
}
