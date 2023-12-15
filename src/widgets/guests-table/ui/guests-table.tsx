import { useQuery } from '@tanstack/react-query'
import { GuestType } from 'entities/guests'
import { getGuests } from 'entities/guests/api/guests-api'
import { Button } from 'shared/ui/buttons/button'
import { Table } from 'shared/ui/table'
import { GuestsTableRow } from './guests-table-row/guests-table-row'
import { Loader } from 'shared/ui/loaders'
import { useTranslation } from 'react-i18next'

export const GuestsTable = () => {
	const { t } = useTranslation('guests')

	const { data: guests, isLoading } = useQuery({
		queryKey: ['guests'],
		queryFn: () => getGuests()
	})

	if (isLoading) return <Loader />

	return (
		<>
			<Table>
				<Table.Header columns='0.6fr 1.2fr 1.8fr 1.8fr 1fr 1fr'>
					<div></div>
					<div>{t('table.guest')}</div>
					<div>{t('table.email')}</div>
					<div>{t('table.country')}</div>
					<div>{t('table.nationalId')}</div>
					<div></div>
				</Table.Header>
				<Table.Body
					data={guests}
					render={(guest: GuestType) => <GuestsTableRow key={guest.id} guest={guest} />}
				/>
				<Table.Footer>
					<Button>{t('table.add-guest')}</Button>
				</Table.Footer>
			</Table>
		</>
	)
}
