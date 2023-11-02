import { useQuery } from '@tanstack/react-query'
import { CabinType, getCabins } from 'entities/cabins'
import { useSearchParams } from 'react-router-dom'

export const useFilterCabin = () => {
	const {
		data: cabins,
		isLoading,
		error,
		refetch
	} = useQuery({
		queryKey: ['cabins'],
		queryFn: getCabins
	})

	const [searchParams] = useSearchParams()

	const filterValue = searchParams.get('discount') || 'all'
	const filteredCabins = cabins?.filter((cabin) => {
		switch (filterValue) {
			case 'all':
				return cabin
			case 'no-discount':
				return cabin.discount === 0

			case 'with-discount':
				return cabin.discount > 0
		}
	})

	const sortByValue = searchParams.get('sortBy') || 'name-asc'
	const [field, direction] = sortByValue.split('-') as [
		keyof Pick<CabinType, 'name' | 'regularPrice' | 'maxCapacity'>,
		string
	]
	const modifier = direction === 'asc' ? 1 : -1
	const sortedCabins =
		filteredCabins &&
		filteredCabins?.sort((a, b) => {
			if (field === 'name') {
				if (direction === 'asc') {
					return a[field].localeCompare(b[field])
				} else {
					return b[field].localeCompare(a[field])
				}
			}
			return (a[field] - b[field]) * modifier
		})

	return {
		cabins,
		filteredCabins,
		sortedCabins,
		isLoading,
		error,
		refetch
	}
}
