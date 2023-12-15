import { GuestsTable } from 'widgets/guests-table'
import style from './guests-page.module.scss'
import { useTranslation } from 'react-i18next'

const GuestsPage = () => {
	const { t } = useTranslation('guests')

	return (
		<div className={style.guests}>
			<div className={style.guestsHeader}>
				<h2 className={style.heading}>{t('title')}</h2>
			</div>
			<div className={style.row}>
				<GuestsTable />
			</div>
		</div>
	)
}

export default GuestsPage
