import { HiOutlineHomeModern, HiOutlineTrash } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import { formatCurrency } from 'shared/lib/format-currency'
import { CabinType } from 'entities/cabins'
import { Modal } from 'shared/ui/modal'
import { Button } from 'shared/ui/buttons/button'
import { useDeleteCabin } from 'features/cabin/delete-cabin/lib/use-delete-cabin'
import { ConfirmDelete } from 'features/confirm-delete'
import style from './cabin-row.module.scss'

interface CabinRowProps {
	cabin: CabinType
}

export const CabinRow = ({ cabin }: CabinRowProps) => {
	const { t } = useTranslation('cabins')
	const { deleteCabinById } = useDeleteCabin()

	return (
		<>
			<div className={style.tableRow}>
				{cabin.image?.length ? (
					<img className={style.image} src={cabin.image} alt={cabin.name} />
				) : (
					<div className={style.defaultImage}>
						<HiOutlineHomeModern size={40} />
					</div>
				)}
				<div className={style.cabin}>{cabin.name}</div>
				<div>
					{t('row.capacity.left')} {cabin.maxCapacity} {t('row.capacity.right')}
				</div>
				<div className={style.price}>{formatCurrency(cabin.regularPrice)}</div>
				<div className={style.discount}>
					{cabin.discount > 0 ? formatCurrency(cabin.discount) : '---'}
				</div>
				<div className={style.cabinButtons}>
					{cabin.id && (
						<Modal>
							<Modal.Open opens='delete-cabin'>
								<Button variant='empty'>
									<HiOutlineTrash size={25} />
								</Button>
							</Modal.Open>
							<Modal.Window name='delete-cabin'>
								<ConfirmDelete
									deleteName={cabin.name}
									disabled={false}
									onConfirm={() => deleteCabinById(cabin.id)}
								/>
							</Modal.Window>
						</Modal>
					)}
				</div>
			</div>
		</>
	)
}
