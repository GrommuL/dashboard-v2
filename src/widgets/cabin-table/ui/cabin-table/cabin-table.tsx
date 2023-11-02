import { CabinRow } from '../cabin-row/cabin-row'
import { TfiReload } from 'react-icons/tfi'
import { Loader } from 'shared/ui/loaders'
import { Button } from 'shared/ui/buttons/button'
import { useTranslation } from 'react-i18next'
import style from './cabin-table.module.scss'
import { useFilterCabin } from 'features/cabin/filter-cabin'
import { Modal } from 'widgets/modal'

export const CabinTable = () => {
	const { t } = useTranslation('cabins')
	const { isLoading, error, refetch, sortedCabins } = useFilterCabin()

	if (isLoading) return <Loader />

	if (error) {
		return (
			<div className={style.error}>
				<span>{t('table.error')}</span>
				<Button variant='primary' onClick={() => refetch()}>
					<TfiReload />
					Reload
				</Button>
			</div>
		)
	}

	if (!sortedCabins.length) {
		return (
			<div className={style.emptyCabins}>
				<span>{t('table.no-cabins')}</span>
				<Modal>
					<Modal.Open opens='cabin-form'>
						<Button variant='primary'>{t('table.add_button')}</Button>
					</Modal.Open>
					<Modal.Window name='cabin-form'>
						<div>form</div>
					</Modal.Window>
				</Modal>
			</div>
		)
	}

	return (
		<>
			<div className={style.table}>
				<div className={style.tableHeader}>
					<div></div>
					<div>{t('table.cabin')}</div>
					<div>{t('table.capacity')}</div>
					<div>{t('table.price')}</div>
					<div>{t('table.discount')}</div>
					<div></div>
				</div>
				{sortedCabins?.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}
			</div>
			<Modal>
				<Modal.Open opens='cabin-form'>
					<Button variant='default'>{t('table.add_button')}</Button>
				</Modal.Open>
				<Modal.Window name='cabin-form'>
					<div>form</div>
				</Modal.Window>
			</Modal>
		</>
	)
}
