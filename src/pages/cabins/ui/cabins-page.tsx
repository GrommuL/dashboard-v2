import { useTranslation } from 'react-i18next'
import { CabinTable } from 'widgets/cabin-table'
import style from './cabins-page.module.scss'
import { Filter } from 'features/filter'
import { cabinFilterOptions, cabinSortOptions } from 'entities/cabins'
import { SortBy } from 'features/sort'

const CabinsPage = () => {
	const { t } = useTranslation('cabins')

	return (
		<div className={style.cabins}>
			<div className={style.cabinsHeader}>
				<h2 className={style.heading}>{t('title')}</h2>
				<div className={style.menu}>
					<Filter filterField='discount' options={cabinFilterOptions} />
					<SortBy sortOptions={cabinSortOptions} />
				</div>
			</div>
			<div className={style.row}>
				<CabinTable />
			</div>
		</div>
	)
}

export default CabinsPage
