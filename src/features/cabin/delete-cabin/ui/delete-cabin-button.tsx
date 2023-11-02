import { HiOutlineTrash } from 'react-icons/hi2'
import { Button } from 'shared/ui/buttons/button'
import { useDeleteCabin } from '../lib/use-delete-cabin'

interface DeleteCabinButtonProps {
	cabinId: number
}

export const DeleteCabinButton = ({ cabinId }: DeleteCabinButtonProps) => {
	const { deleteCabinById } = useDeleteCabin()

	return (
		<Button variant='empty' onClick={() => deleteCabinById(cabinId)}>
			<HiOutlineTrash size={25} />
		</Button>
	)
}
