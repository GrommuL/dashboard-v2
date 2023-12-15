import { GuestsTable } from 'widgets/guests-table'
import style from './guests-page.module.scss'

const GuestsPage = () => {
	return (
		<div className={style.guests}>
			<div className={style.guestsHeader}>
				<h2 className={style.heading}>Guests</h2>
			</div>
			<div className={style.row}>
				<GuestsTable />
			</div>
		</div>
	)
}

export default GuestsPage
