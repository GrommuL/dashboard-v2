import { useQuery } from '@tanstack/react-query'
import { BookingType, getBookings } from 'entities/bookings'
import { useSearchParams } from 'react-router-dom'
import { PAGE_LIMIT } from 'shared/lib/constants/bookings-constants'

export const useFilterBookings = () => {
	const [searchParams] = useSearchParams()
	const filterValue = searchParams.get('status') || 'all'
	const sortByValue = searchParams.get('sortBy') || 'name-asc'
	const [field, direction] = sortByValue.split('-') as [
		keyof Pick<BookingType, 'totalPrice' | 'numNights'>,
		string
	]
	const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

	const queryParams = {
		status: filterValue,
		sort: field,
		order: direction,
		limit: PAGE_LIMIT,
		currentPage
	}

	const {
		data: bookings,
		isLoading,
		error,
		refetch
	} = useQuery({
		queryKey: ['bookings', queryParams],
		queryFn: () => getBookings(queryParams)
	})

	// const filteredBookings = bookings?.data?.filter((booking) => {
	// 	switch (filterValue) {
	// 		case 'all':
	// 			return booking
	// 		case 'unconfirmed':
	// 			return booking.status === 'unconfirmed'

	// 		case 'confirmed':
	// 			return booking.status === 'confirmed'
	// 		case 'checked-in':
	// 			return booking.status === 'checked-in'
	// 		case 'checked-out':
	// 			return booking.status === 'checked-out'
	// 	}
	// })

	// const modifier = direction === 'asc' ? 1 : -1
	// const sortedBookings =
	// 	filteredBookings &&
	// 	filteredBookings?.sort((a, b) => {
	// 		return (a[field] - b[field]) * modifier
	// 	})

	return {
		bookings,
		// filteredBookings,
		// sortedBookings,
		isLoading,
		error,
		refetch,
		currentPage
	}
}
