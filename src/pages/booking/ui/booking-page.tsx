import { useQuery } from '@tanstack/react-query'
import { getBookingById, getBookingByIdWithCabinNameAndGuestInformation } from 'entities/bookings'
import { useParams, useNavigate } from 'react-router-dom'
import { Loader } from 'shared/ui/loaders'
import style from './booking-page.module.scss'
import { RoutePath } from 'shared/config/route-config'
import { Button } from 'shared/ui/buttons/button'
import { Tag } from 'shared/ui/tag'
import { BookingDataBox } from './booking-data-box/booking-data-box'

const BookingPage = () => {
	const params = useParams()
	const navigate = useNavigate()
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
			<BookingDataBox booking={booking} />
		</>
	)
}

export default BookingPage
