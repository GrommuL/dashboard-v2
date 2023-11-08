import { Loader } from 'shared/ui/loaders'
import { BookingRow } from './booking-row/booking-row'
import style from './bookings-table.module.scss'
import { BookingType } from 'entities/bookings'
import { Button } from 'shared/ui/buttons/button'
import { TfiReload } from 'react-icons/tfi'
import { Table } from 'shared/ui/table'
import { useFilterBookings } from 'features/bookings/filter-bookings'
import { useTranslation } from 'react-i18next'
import { Pagination } from 'features/pagination'
import { PAGE_LIMIT } from 'shared/lib/constants/bookings-constants'

export const BookingsTable = () => {
	const { bookings, isLoading, error, refetch, currentPage } = useFilterBookings()
	const { t } = useTranslation('bookings')

	if (isLoading) return <Loader />

	if (error) {
		return (
			<div className={style.error}>
				<span>{t('bookings-error.title')}</span>
				<Button variant='primary' onClick={() => refetch()}>
					<TfiReload />
					{t('bookings-error.button')}
				</Button>
			</div>
		)
	}

	if (!bookings?.data.length) {
		return (
			<div className={style.emptyBookings}>
				<span>{t('bookings-empty')}</span>
			</div>
		)
	}

	return (
		<>
			<Table>
				<Table.Header columns='0.6fr 1.2fr 1.8fr 1.8fr 1fr 1fr'>
					<div></div>
					<div>{t('bookings-table-header.cabin')}</div>
					<div>{t('bookings-table-header.guests')}</div>
					<div>{t('bookings-table-header.dates')}</div>
					<div>{t('bookings-table-header.status')}</div>
					<div>{t('bookings-table-header.amount')}</div>
					<div></div>
				</Table.Header>
				<Table.Body
					data={bookings?.data}
					render={(booking: BookingType) => <BookingRow key={booking.id} booking={booking} />}
				/>
				<Table.Footer>
					<Pagination count={bookings?.length} pageSize={PAGE_LIMIT} currentPage={currentPage} />
				</Table.Footer>
			</Table>
		</>
	)
}
