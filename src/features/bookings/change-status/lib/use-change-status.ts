import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editBookingStatusToCheckedIn, editBookingStatusToCheckedOut } from 'entities/bookings'
import toast from 'react-hot-toast'

export const useChangeStatus = (bookingId: string | number) => {
	const queryClient = useQueryClient()
	const { mutate: changeStatusToCheckedIn } = useMutation({
		mutationKey: ['booking', bookingId],
		mutationFn: (bookingId: string | number) => editBookingStatusToCheckedIn(bookingId),
		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successfully checked in`)
			queryClient.invalidateQueries({
				queryKey: ['booking', bookingId]
			})
			queryClient.invalidateQueries({
				queryKey: ['bookings']
			})
		},
		onError: () => {
			toast.error('Failed to change status')
		}
	})
	const { mutate: changeStatusToCheckedOut } = useMutation({
		mutationKey: ['booking', bookingId],
		mutationFn: (bookingId: string | number) => editBookingStatusToCheckedOut(bookingId),
		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successfully checked out`)
			queryClient.invalidateQueries({
				queryKey: ['booking', bookingId]
			})
			queryClient.invalidateQueries({
				queryKey: ['bookings']
			})
		},
		onError: () => {
			toast.error('Failed to change status')
		}
	})
	const handleChangeStatusToCheckedIn = () => {
		changeStatusToCheckedIn(bookingId)
	}
	const handleChangeStatusToCheckedOut = () => {
		changeStatusToCheckedOut(bookingId)
	}

	return { handleChangeStatusToCheckedIn, handleChangeStatusToCheckedOut }
}
