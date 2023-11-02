import { ButtonHTMLAttributes, FC } from 'react'
import style from './filter-button.module.scss'
import clsx from 'clsx'

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isActive: boolean
}

export const FilterButton: FC<FilterButtonProps> = ({ children, isActive, ...otherProps }) => {
	return (
		<button className={clsx(style.button, isActive && style['button_active'])} {...otherProps}>
			{children}
		</button>
	)
}
