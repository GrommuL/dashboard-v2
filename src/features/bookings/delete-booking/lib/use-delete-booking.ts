import { useMutation } from '@tanstack/react-query'
import { deleteBooking } from 'entities/bookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useDeleteBooking = (bookingId: string | number) => {
	const navigate = useNavigate()
	const { mutate: deleteBookingById } = useMutation({
		mutationKey: ['booking', bookingId],
		mutationFn: deleteBooking,
		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successfully deleted`)
			navigate('/bookings')
		},
		onError: () => {
			toast.error('Failed to delete booking')
		}
	})

	const handleDeleteBooking = () => {
		deleteBookingById(bookingId)
	}

	return { handleDeleteBooking }
}
