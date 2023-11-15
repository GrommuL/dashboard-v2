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
import { useDashboardStatistics } from 'features/dashboard'

const DashboardPage = () => {
	const { bookings, data, colors, sales, checkins } = useDashboardStatistics()

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
