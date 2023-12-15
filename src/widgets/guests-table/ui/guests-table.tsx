import { useQuery } from '@tanstack/react-query'
import { GuestType } from 'entities/guests'
import { getGuests } from 'entities/guests/api/guests-api'
import { Button } from 'shared/ui/buttons/button'
import { Table } from 'shared/ui/table'
import { GuestsTableRow } from './guests-table-row/guests-table-row'

export const GuestsTable = () => {
	const { data: guests, isLoading } = useQuery({
		queryKey: ['guests'],
		queryFn: () => getGuests()
	})

	return (
		<>
			<Table>
				<Table.Header columns='0.6fr 1.2fr 1.8fr 1.8fr 1fr 1fr'>
					<div></div>
					<div>Guest</div>
					<div>Email</div>
					<div>Country</div>
					<div>National ID</div>
					<div></div>
				</Table.Header>
				<Table.Body
					data={guests}
					render={(guest: GuestType) => <GuestsTableRow key={guest.id} guest={guest} />}
				/>
				<Table.Footer>
					<Button>Add guest</Button>
				</Table.Footer>
			</Table>
		</>
	)
}
