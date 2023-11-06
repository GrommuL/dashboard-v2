import { FC, PropsWithRef, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import clsx from 'clsx'
import style from './text-area.module.scss'

interface TextAreaComponentProps {
	registerId: string
	label?: string
	textAreaProps: PropsWithRef<TextareaHTMLAttributes<HTMLTextAreaElement>>
	error: FieldError | undefined
}

export const TextArea: FC<TextAreaComponentProps> = ({
	label,
	error,
	registerId,
	textAreaProps
}) => {
	return (
		<div className={style.box}>
			<label htmlFor={registerId} className={style.label}>
				{label}
			</label>
			<textarea
				id={registerId}
				className={clsx(style.textArea, error && style.error)}
				{...textAreaProps}
			/>
			<span className={style.errorMessage}>{error?.message}</span>
		</div>
	)
}
