import { HiOutlineHomeModern } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import { formatCurrency } from 'shared/lib/format-currency'
import { CabinType } from 'entities/cabins'
import style from './cabin-row.module.scss'

interface CabinRowProps {
	cabin: CabinType
}

export const CabinRow = ({ cabin }: CabinRowProps) => {
	const { t } = useTranslation('cabins')

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
			</div>
		</>
	)
}
