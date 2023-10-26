import { ButtonHTMLAttributes, FC } from 'react'
import style from './button.module.scss'
import clsx from 'clsx'

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'empty'
type ButtonSize = 'fixed' | 'auto'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
	variant = 'default',
	size = 'auto',
	...otherProps
}) => {
	return (
		<button
			className={clsx(style.button, style[variant], [style[size], className])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
