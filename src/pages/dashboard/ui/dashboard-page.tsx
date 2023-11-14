import { useQuery } from '@tanstack/react-query'
import { BookingType, getAllBookings } from 'entities/bookings'
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays } from 'react-icons/hi2'
import { formatCurrency } from 'shared/lib/format-currency'
import { Stat } from 'shared/ui/stat'
import style from './dashboard-page.module.scss'

const DashboardPage = () => {
	const { data: bookings } = useQuery({
		queryKey: ['bookings'],
		queryFn: getAllBookings
	})
	const sales = bookings?.reduce((acc, item) => {
		acc = acc + item.totalPrice
		return acc
	}, 0)

	const checkins = bookings?.filter((item) => item.status === 'checked-in')?.length

	return (
		<div className={style.stats}>
			<Stat
				title='Bookings'
				color='var(--blue-300)'
				icon={HiOutlineBriefcase}
				value={bookings?.length}
			/>
			<Stat title='Sales' color='green' icon={HiOutlineBanknotes} value={formatCurrency(sales)} />
			<Stat title='Check ins' color='indigo' icon={HiOutlineCalendarDays} value={checkins} />
		</div>
	)
}

export default DashboardPage
