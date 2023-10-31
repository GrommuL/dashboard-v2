import { useTranslation } from 'react-i18next'
import { CabinTable } from 'widgets/cabin-table'
import style from './cabins-page.module.scss'

const CabinsPage = () => {
	const { t } = useTranslation('cabins')

	return (
		<div className={style.cabins}>
			<div className={style.cabinsHeader}>
				<h2 className={style.heading}>{t('title')}</h2>
				<div className={style.menu}>Filter/Sort</div>
			</div>
			<div className={style.row}>
				<CabinTable />
			</div>
		</div>
	)
}

export default CabinsPage
