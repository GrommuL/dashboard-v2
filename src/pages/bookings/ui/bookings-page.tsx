import { BookingsTable } from 'widgets/bookings-table'
import style from './bookings-page.module.scss'
import { Filter } from 'features/filter'
import { SortBy } from 'features/sort'
import { bookingsFilterOptions, bookingsSortOptions } from 'entities/bookings'
import { useTranslation } from 'react-i18next'

const BookingsPage = () => {
	const { t } = useTranslation('bookings')

	return (
		<div className={style.bookings}>
			<div className={style.bookingsHeader}>
				<h2 className={style.heading}>{t('bookings-page-title')}</h2>
				<div className={style.menu}>
					<Filter filterField='status' options={bookingsFilterOptions} />
					<SortBy sortOptions={bookingsSortOptions} />
				</div>
			</div>
			<div className={style.row}>
				<BookingsTable />
			</div>
		</div>
	)
}

export default BookingsPage
