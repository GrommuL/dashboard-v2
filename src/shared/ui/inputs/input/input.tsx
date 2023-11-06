import { FC, InputHTMLAttributes, PropsWithRef } from 'react'
import { FieldError } from 'react-hook-form'
import clsx from 'clsx'
import style from './input.module.scss'

interface InputProps {
	label?: string
	error: FieldError | undefined
	inputProps: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
	registerId: string
}

export const Input: FC<InputProps> = ({ label, registerId, error, inputProps }) => {
	return (
		<div className={style.box}>
			<label htmlFor={registerId} className={style.label}>
				{label}
			</label>
			<input id={registerId} className={clsx(style.input, error && style.error)} {...inputProps} />
			<span className={style.errorMessage}>{error?.message}</span>
		</div>
	)
}
