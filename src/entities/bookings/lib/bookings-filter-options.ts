import { FilterOptionsType } from 'features/filter'

export const bookingsFilterOptions: FilterOptionsType[] = [
	{
		label_en: 'All',
		label_ru: 'Все',
		value: 'all'
	},
	{
		label_en: 'Unconfirmed',
		label_ru: 'Не подтвержден',
		value: 'unconfirmed'
	},
	{
		label_en: 'Confirmed',
		label_ru: 'Подтвержден',
		value: 'confirmed'
	},
	{
		label_en: 'Checked-in',
		label_ru: 'Зарегистрировался',
		value: 'checked-in'
	},
	{
		label_en: 'Checked-out',
		label_ru: 'Выселился',
		value: 'checked-out'
	}
]
