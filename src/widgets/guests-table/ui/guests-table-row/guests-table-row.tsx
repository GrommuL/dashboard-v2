import { GuestType } from 'entities/guests'
import style from './guests-table-row.module.scss'
import { FC } from 'react'

interface GuestsTableRowProps {
	guest: GuestType
}

export const GuestsTableRow: FC<GuestsTableRowProps> = ({ guest }) => {
	const { fullName, nationality, nationalID, email, countryFlag } = guest

	return (
		<>
			<div className={style.guestsRow}>
				<div className={style.guestInfo}>
					<img src={countryFlag} alt={nationality} width={30} height={20} />
					<span>{fullName}</span>
				</div>
				<span className={style.email}>{email}</span>
				<span>{nationality}</span>
				<span>{nationalID}</span>
			</div>
		</>
	)
}
