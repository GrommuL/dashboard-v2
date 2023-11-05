import { CabinRow } from '../cabin-row/cabin-row'
import { TfiReload } from 'react-icons/tfi'
import { Loader } from 'shared/ui/loaders'
import { Button } from 'shared/ui/buttons/button'
import { useTranslation } from 'react-i18next'
import style from './cabin-table.module.scss'
import { useFilterCabin } from 'features/cabin/filter-cabin'
import { Modal } from 'shared/ui/modal'
import { Table } from 'shared/ui/table'
import { CabinType } from 'entities/cabins'

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
					<Modal.Open opens='cabin-form-empty'>
						<Button variant='primary'>{t('table.add_button')}</Button>
					</Modal.Open>
					<Modal.Window name='cabin-form-empty'>
						<div>form</div>
					</Modal.Window>
				</Modal>
			</div>
		)
	}

	return (
		<>
			<Table>
				<Table.Header columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
					<div></div>
					<div>{t('table.cabin')}</div>
					<div>{t('table.capacity')}</div>
					<div>{t('table.price')}</div>
					<div>{t('table.discount')}</div>
					<div></div>
				</Table.Header>
				<Table.Body
					data={sortedCabins}
					render={(cabin: CabinType) => <CabinRow key={cabin.id} cabin={cabin} />}
				/>
			</Table>
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
