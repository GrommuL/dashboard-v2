import { FC } from 'react'
import style from './tag.module.scss'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { translatedStatusTag } from 'shared/lib/translated-status-tag'
import { BookingStatus } from 'entities/bookings'

interface TagProps {
	label: BookingStatus
}

export const Tag: FC<TagProps> = ({ label }) => {
	const { i18n } = useTranslation()
	const formattedTag = label.replace('-', '')

	return (
		<div className={clsx(style.tag, style[formattedTag])}>
			{i18n.language === 'en' ? label : translatedStatusTag(label)}
		</div>
	)
}
