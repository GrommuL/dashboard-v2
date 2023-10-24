import { FC, InputHTMLAttributes } from 'react'
import style from './switch.module.scss'
import clsx from 'clsx'

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	className?: string
}

export const Switch: FC<SwitchProps> = ({ id, className, ...otherProps }) => {
	return (
		<div className={style.switch}>
			<label className={style.label} htmlFor={id} />
			<input
				className={clsx(style.checkbox, [className])}
				{...otherProps}
				id={id}
				type='checkbox'
			/>
		</div>
	)
}
