import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin } from 'entities/cabins'

export const useDeleteCabin = () => {
	const queryClient = useQueryClient()

	const { mutate: deleteCabinById } = useMutation({
		mutationFn: deleteCabin,
		onSuccess: () => {
			toast.success('Cabin successfully deleted')
			queryClient.invalidateQueries({
				queryKey: ['cabins']
			})
		},
		onError: () => {
			toast.error('Cabin could not be deleted')
		}
	})

	return {
		deleteCabinById
	}
}
