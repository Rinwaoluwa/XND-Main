import { UrlObject } from 'url'
import Link from 'next/link'

type Url = string | UrlObject

interface ButtonProps {
  el?: 'button' | 'link'
  variant?: 'dark' | 'light' | 'danger' | 'white' | 'gray' | 'light-blue'
  to?: Url
  width?: string
  size?: 'lg' | 'md' | 'md-2' | 'sm'
  roundedSm?: boolean
  action?: () => void
  disabled?: boolean
  children: React.ReactNode
  [x: string]: any
}

export const Button = (props: ButtonProps) => {
  const {
    variant = 'dark',
    el = 'button',
    to,
    width,
    size = 'md',
    action,
    roundedSm,
    disabled,
    children,
    ...restProps
  } = props

  const color = {
    danger: 'bg-negative text-white hover:bg-negative hover:text-white',
    gray: 'bg-g-100 text-g-800 hover:bg-g-200',
    light: 'bg-p-50 text-p-600 hover:bg-p-600 hover:text-white',
    dark: 'bg-p-600 text-white hover:text-white hover:bg-p-600',
    white: 'bg-white border border-g-500 text-g-700 hover:bg-g-200',
    'light-blue': 'bg-white text-p-400 border border-p-200 hover:bg-p-50'
  }

  if (el === 'link') {
    return (
      <Link
        href={to as Url}
        className={`flex items-center justify-center gap-2 ${
          size === 'lg'
            ? 'py-4 px-4 lg:px-8 rounded-lg font-medium'
            : size === 'sm'
            ? 'py-[7px] lg:py-1.5 px-6 lg:px-4 rounded-[4px]'
            : size === 'md-2'
            ? 'py-3 px-4 rounded-lg font-medium'
            : 'py-3 px-4 lg:px-6 rounded-lg font-medium'
        } text-xs lg:text-sm leading-6 -tracking-[0.154px] transition-all duration-300 cursor-pointer ${
          disabled
            ? ' disabled:text-p-600   disabled:bg-p-50 disabled:hover:bg-p-50 disabled:cursor-default'
            : color[variant]
        } active:scale-[0.975] ${width ? `w-${width}` : ''}`}
        {...restProps}
        onClick={action}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 ${
        size === 'lg'
          ? 'py-4 px-4 lg:px-8 rounded-lg font-medium'
          : size === 'sm'
          ? 'py-[7px] lg:py-1.5 px-6 lg:px-4 rounded-[4px]'
          : size === 'md-2'
          ? 'py-3 px-4 rounded-lg font-medium'
          : 'py-3 px-4 lg:px-6 rounded-lg font-medium'
      } text-xs lg:text-sm leading-6 -tracking-[0.154px] transition-all cursor-pointer ${
        disabled
          ? ' disabled:text-p-600 disabled:bg-p-50 disabled:hover:bg-p-50 disabled:cursor-default'
          : color[variant]
      } active:scale-[0.975] ${width ? `w-${width}` : ''}`}
      {...restProps}
      onClick={action}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
