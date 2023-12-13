import { useQuery } from '@tanstack/react-query'
import { eachDayOfInterval, format, isSameDay } from 'date-fns'
import { getAllBookings } from 'entities/bookings'
import { useContext } from 'react'
import { ThemeContext, ThemeVariants } from 'shared/config/theme-config'

export const useDashboardStatistics = () => {
	const { theme } = useContext(ThemeContext)
	const { data: bookings, isLoading } = useQuery({
		queryKey: ['bookings'],
		queryFn: getAllBookings
	})

	const sales = bookings?.reduce((acc, item) => acc + item.totalPrice, 0)

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
		start: new Date(2023, 7, 30),
		end: new Date(2023, 8, 18)
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

	return {
		bookings,
		sales,
		checkins,
		colors,
		data,
		isLoading
	}
}
