import { ChangeEvent } from 'react'
import style from './select.module.scss'
import { OptionsType } from '../lib/options-type'
import { useTranslation } from 'react-i18next'

export const Select = ({
	options,
	value,
	onChange
}: {
	options: OptionsType[]
	value: string
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) => {
	const { i18n } = useTranslation()

	return (
		<select className={style.select} value={value} onChange={onChange}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{i18n.language === 'ru' ? option.label_ru : option.label_en}
				</option>
			))}
		</select>
	)
}
