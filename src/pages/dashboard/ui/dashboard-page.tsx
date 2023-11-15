import { useQuery } from '@tanstack/react-query'
import { getAllBookings } from 'entities/bookings'
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays } from 'react-icons/hi2'
import { formatCurrency } from 'shared/lib/format-currency'
import { Stat } from 'shared/ui/stat'
import style from './dashboard-page.module.scss'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'
import { useContext } from 'react'
import { ThemeContext, ThemeVariants } from 'shared/config/theme-config'
import { eachDayOfInterval, format, isSameDay } from 'date-fns'

const DashboardPage = () => {
	const { theme } = useContext(ThemeContext)
	const { data: bookings } = useQuery({
		queryKey: ['bookings'],
		queryFn: getAllBookings
	})

	const sales = bookings?.reduce((acc, item) => {
		acc = acc + item.totalPrice
		return acc
	}, 0)

	const checkins = bookings?.filter((item) => item.status === 'checked-in')?.length

	const colors =
		theme === ThemeVariants.DARK
			? {
					totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
					extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
					text: '#e5e7eb',
					background: '#18212f'
			  }
			: {
					totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
					extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
					text: '#374151',
					background: '#fff'
			  }

	const allDates = eachDayOfInterval({
		start: new Date(2023, 8, 20),
		end: new Date(2023, 8, 25)
	})

	const data = allDates.map((date) => {
		return {
			label: format(date, 'MMM dd'),
			totalSales: bookings
				?.filter((booking) => isSameDay(date, new Date(booking.createdAt)))
				?.reduce((acc, cur) => acc + cur.totalPrice, 0),
			extrasSales: bookings
				?.filter((booking) => isSameDay(date, new Date(booking.createdAt)))
				?.reduce((acc, cur) => acc + cur.extraPrice, 0)
		}
	})

	return (
		<div className={style.dashboard}>
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

			<ResponsiveContainer height={300} width='100%'>
				<AreaChart data={data}>
					<XAxis dataKey='label' tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
					<YAxis unit='$' tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
					<CartesianGrid strokeDasharray='4' />
					<Tooltip contentStyle={{ backgroundColor: colors.background }} />
					<Area
						dataKey='totalSales'
						type='monotone'
						stroke={colors.totalSales.stroke}
						fill={colors.totalSales.fill}
						strokeWidth={2}
						name='Total sales'
						unit='$'
					/>
					<Area
						dataKey='extrasSales'
						type='monotone'
						stroke={colors.extrasSales.stroke}
						fill={colors.extrasSales.fill}
						strokeWidth={2}
						name='Extras sales'
						unit='$'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}

export default DashboardPage
