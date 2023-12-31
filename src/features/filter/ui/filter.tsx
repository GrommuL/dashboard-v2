import { FC } from 'react'
import style from './filter.module.scss'
import { useSearchParams } from 'react-router-dom'
import { FilterButton } from './filter-button/filter-button'
import { useTranslation } from 'react-i18next'
import { FilterOptionsType } from 'shared/lib/types/filter-type'

interface FilterProps {
	filterField: string
	options: FilterOptionsType[]
}

export const Filter: FC<FilterProps> = ({ filterField, options }) => {
	const { i18n } = useTranslation()

	const [searchParams, setSearchParams] = useSearchParams()
	const currentFilterValue = searchParams.get(filterField) || options.at(0)?.value

	const setFilterValue = (value: string) => {
		searchParams.set(filterField, value)
		searchParams.set('page', '1')
		setSearchParams(searchParams)
	}

	return (
		<div className={style.buttons}>
			{options.map((option) => (
				<FilterButton
					key={option.value}
					isActive={currentFilterValue === option.value}
					onClick={() => setFilterValue(option.value)}
					disabled={currentFilterValue === option.value}
				>
					{i18n.language === 'ru' ? option.label_ru : option.label_en}
				</FilterButton>
			))}
		</div>
	)
}
