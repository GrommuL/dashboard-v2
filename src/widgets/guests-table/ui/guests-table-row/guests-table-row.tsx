import { GuestType } from 'entities/guests'
import style from './guests-table-row.module.scss'
import { FC } from 'react'
import { Modal } from 'shared/ui/modal'
import { Button } from 'shared/ui/buttons/button'
import { HiOutlineTrash } from 'react-icons/hi2'
import { ConfirmDelete } from 'features/confirm-delete'
import { useDeleteGuest } from 'features/guests/delete-guest'

interface GuestsTableRowProps {
	guest: GuestType
}

export const GuestsTableRow: FC<GuestsTableRowProps> = ({ guest }) => {
	const { fullName, nationality, nationalID, email, countryFlag, id } = guest
	const { deleteGuestById } = useDeleteGuest()
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
				<div className={style.guestsButtons}>
					{id && (
						<Modal>
							<Modal.Open opens='delete-guest'>
								<Button variant='empty'>
									<HiOutlineTrash size={20} />
								</Button>
							</Modal.Open>

							<Modal.Window name='delete-guest'>
								<ConfirmDelete
									deleteName={fullName}
									disabled={false}
									onConfirm={() => deleteGuestById(id)}
								/>
							</Modal.Window>
						</Modal>
					)}
				</div>
			</div>
		</>
	)
}
