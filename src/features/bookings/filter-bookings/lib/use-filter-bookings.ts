import { useQuery } from '@tanstack/react-query'
import { BookingType, getBookings } from 'entities/bookings'
import { useSearchParams } from 'react-router-dom'

export const useFilterBookings = () => {
	const [searchParams] = useSearchParams()
	const {
		data: bookings,
		isLoading,
		error,
		refetch
	} = useQuery({
		queryKey: ['bookings'],
		queryFn: getBookings
	})

	const filterValue = searchParams.get('status') || 'all'
	const filteredBookings = bookings?.filter((booking) => {
		switch (filterValue) {
			case 'all':
				return booking
			case 'unconfirmed':
				return booking.status === 'unconfirmed'

			case 'confirmed':
				return booking.status === 'confirmed'
			case 'checked-in':
				return booking.status === 'checked-in'
			case 'checked-out':
				return booking.status === 'checked-out'
		}
	})

	const sortByValue = searchParams.get('sortBy') || 'name-asc'
	const [field, direction] = sortByValue.split('-') as [
		keyof Pick<BookingType, 'totalPrice' | 'numNights'>,
		string
	]
	const modifier = direction === 'asc' ? 1 : -1
	const sortedBookings =
		filteredBookings &&
		filteredBookings?.sort((a, b) => {
			return (a[field] - b[field]) * modifier
		})

	return { bookings, filteredBookings, sortedBookings, isLoading, error, refetch }
}
