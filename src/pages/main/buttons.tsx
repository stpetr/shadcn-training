import { useCallback, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import MuiButton from '@mui/material/Button';

type ButtonConfig = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'contained' | 'outlined'
  text?: string
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'
  disabled?: boolean
}

export const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  const buttonsConfig: ButtonConfig[] = useMemo(() => {
    return [
      { size: 'small', color: 'primary', text: 'Text small' },
      { color: 'secondary',  text: 'Text medium' },
      { size: 'large', color: 'info', text: 'Text large' },
      { disabled: true, text: 'Text disabled' },

      { size: 'small', variant: 'contained', color: 'error', text: 'Contained small' },
      { variant: 'contained', color: 'warning', text: 'Contained' },
      { size: 'large', variant: 'contained', color: 'success', text: 'Contained large' },
      { disabled: true, variant: 'contained', text: 'Contained disabled' },

      { size: 'small', variant: 'outlined', text: 'Outlined small' },
      { variant: 'outlined', text: 'Outlined' },
      { size: 'large', variant: 'outlined', text: 'Outlined large' },
      { disabled: true, variant: 'outlined', text: 'Outlined disabled' },
    ]
  }, [])

  const buttonSets = useMemo(() => {
    return [
      { component: Button, 'heading': 'UI Kit buttons' },
      { component: MuiButton, 'heading': 'MUI buttons' },
    ]
  }, [])

  return (
    <>
      {buttonSets.map((set) => {
        const ButtonComponent = set.component
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-center">{set.heading}</h2>

            {buttonsConfig.map((el, index) => (
              <ButtonComponent
                key={index}
                size={el.size}
                variant={el.variant}
                color={el.color}
                disabled={el.disabled || isLoading}
                loading={isLoading}
                onClick={handleClick}
              >{el.text}</ButtonComponent>
            ))}
          </div>
        )
      })}
    </>
  )
}
