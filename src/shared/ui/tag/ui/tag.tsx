import { FC } from 'react'
import style from './tag.module.scss'
import clsx from 'clsx'

interface TagProps {
	label: string
}

export const Tag: FC<TagProps> = ({ label }) => {
	const formattedTag = label.replace('-', '')

	return <div className={clsx(style.tag, style[formattedTag])}>{label}</div>
}
