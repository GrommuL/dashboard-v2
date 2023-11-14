import { FilterOptionsType } from 'shared/lib/types/filter-type'

export const cabinFilterOptions: FilterOptionsType[] = [
	{
		label_en: 'All',
		label_ru: 'Все',
		value: 'all'
	},
	{
		label_en: 'No discount',
		label_ru: 'Без скидки',
		value: 'no-discount'
	},
	{
		label_en: 'With discount',
		label_ru: 'Со скидкой',
		value: 'with-discount'
	}
]
