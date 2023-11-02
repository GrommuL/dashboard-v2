import { useQuery } from '@tanstack/react-query'
import { getCabins } from 'entities/cabins'
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

	return {
		cabins,
		filteredCabins,
		isLoading,
		error,
		refetch
	}
}
