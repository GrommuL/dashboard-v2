import { useQuery } from '@tanstack/react-query'
import { getBookingById, getBookingByIdWithCabinNameAndGuestInformation } from 'entities/bookings'
import { useParams, useNavigate } from 'react-router-dom'
import { Loader } from 'shared/ui/loaders'
import style from './booking-page.module.scss'
import { RoutePath } from 'shared/config/route-config'
import { Button } from 'shared/ui/buttons/button'
import { Tag } from 'shared/ui/tag'
import { BookingDataBox } from './booking-data-box/booking-data-box'
import { useChangeStatus } from 'features/bookings/change-status'
import { useDeleteBooking } from 'features/bookings/delete-booking'

const BookingPage = () => {
	const params = useParams()
	const navigate = useNavigate()
	const { handleChangeStatusToCheckedIn, handleChangeStatusToCheckedOut } = useChangeStatus(
		params.id
	)
	const { handleDeleteBooking } = useDeleteBooking(params.id)
	const { data: booking, isLoading } = useQuery({
		queryKey: ['booking', params.id],
		queryFn: () => getBookingByIdWithCabinNameAndGuestInformation(params.id)
	})
	console.log(booking)

	if (isLoading) return <Loader />

	return (
		<>
			<div className={style.booking}>
				<header className={style.header}>
					<h1>Booking #{booking?.id}</h1>
					{booking && <Tag label={booking?.status} />}
				</header>
				<Button variant='empty' onClick={() => navigate(RoutePath.bookings)}>
					&larr; Back
				</Button>
			</div>
			<div className={style.details}>
				<BookingDataBox booking={booking} />
				<div className={style.detailsButtons}>
					<Button
						size='fixed'
						onClick={handleDeleteBooking}
					>{`Delete booking #${booking?.id}`}</Button>
					{booking.status !== 'checked-in' && booking.status !== 'checked-out' && (
						<Button
							size='fixed'
							variant='secondary'
							onClick={handleChangeStatusToCheckedIn}
						>{`Check in booking #${booking?.id}`}</Button>
					)}
					{booking.status === 'checked-in' && (
						<Button
							size='fixed'
							variant='secondary'
							onClick={handleChangeStatusToCheckedOut}
						>{`Check out booking #${booking?.id}`}</Button>
					)}
				</div>
			</div>
		</>
	)
}

export default BookingPage
