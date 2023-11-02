import { CabinRow } from '../cabin-row/cabin-row'
import { TfiReload } from 'react-icons/tfi'
import { Loader } from 'shared/ui/loaders'
import { Button } from 'shared/ui/buttons/button'
import { useTranslation } from 'react-i18next'
import style from './cabin-table.module.scss'
import { useFilterCabin } from 'features/cabin/filter-cabin'

export const CabinTable = () => {
	const { t } = useTranslation('cabins')
	const { isLoading, error, refetch, filteredCabins } = useFilterCabin()

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
				{filteredCabins?.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}
			</div>
			<div className={style.createCabin}>
				<Button variant='default' onClick={() => console.log('first')}>
					{t('table.add_button')}
				</Button>
			</div>
		</>
	)
}
