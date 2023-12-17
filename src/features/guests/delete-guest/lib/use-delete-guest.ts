import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteGuest } from 'entities/guests'
import toast from 'react-hot-toast'

export const useDeleteGuest = () => {
	const queryClient = useQueryClient()

	const { mutate: deleteGuestById } = useMutation({
		mutationFn: deleteGuest,
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
		deleteGuestById
	}
}
