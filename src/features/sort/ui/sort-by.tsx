import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { OptionsType, Select } from 'shared/ui/select'

export const SortBy = ({ sortOptions }: { sortOptions: OptionsType[] }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const sortByValue = searchParams.get('sortBy') || ''

	const handleSubmit = (e: ChangeEvent<HTMLSelectElement>) => {
		searchParams.set('sortBy', e.target.value)
		setSearchParams(searchParams)
	}

	return <Select value={sortByValue} options={sortOptions} onChange={handleSubmit} />
}
