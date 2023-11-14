import { useQuery, useQueryClient } from '@tanstack/react-query'
import { BookingType, getBookings } from 'entities/bookings'
import { useSearchParams } from 'react-router-dom'
import { PAGE_LIMIT } from 'shared/lib/constants/bookings-constants'

export const useFilterBookings = () => {
	const queryClient = useQueryClient()
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

	const pageCount = Math.ceil(bookings?.length / PAGE_LIMIT)

	if (currentPage < pageCount) {
		const queryParams = {
			status: filterValue,
			sort: field,
			order: direction,
			limit: PAGE_LIMIT,
			currentPage: currentPage + 1
		}
		queryClient.prefetchQuery({
			queryKey: ['bookings', queryParams],
			queryFn: () => getBookings(queryParams)
		})
	}

	if (currentPage > 1) {
		const queryParams = {
			status: filterValue,
			sort: field,
			order: direction,
			limit: PAGE_LIMIT,
			currentPage: currentPage - 1
		}
		queryClient.prefetchQuery({
			queryKey: ['bookings', queryParams],
			queryFn: () => getBookings(queryParams)
		})
	}

	return {
		bookings,
		isLoading,
		error,
		refetch,
		currentPage
	}
}
