import { HiOutlineTrash } from 'react-icons/hi2'
import { Button } from 'shared/ui/buttons/button'
import { useDeleteGuest } from '../lib/use-delete-guest'

interface DeleteGuestButtonProps {
	guestId: number
}

export const DeleteGuestButton = ({ guestId }: DeleteGuestButtonProps) => {
	const { deleteGuestById } = useDeleteGuest()

	return (
		<Button variant='empty' onClick={() => deleteGuestById(guestId)}>
			<HiOutlineTrash size={25} />
		</Button>
	)
}
