import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { format, isToday } from 'date-fns'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { BookingType, getBookingByIdWithCabinNameAndGuestInformation } from 'entities/bookings'
import { formatDistanceFromNow } from 'shared/lib/format-distance-from-now'
import { formatCurrency } from 'shared/lib/format-currency'
import { Tag } from 'shared/ui/tag'
import style from './booking-row.module.scss'

export const BookingRow = ({ booking }: { booking: BookingType }) => {
	const { data: bookingInfo } = useQuery({
		queryKey: ['bookingWithCabinNameAndGuestInformation', booking.id],
		queryFn: () => getBookingByIdWithCabinNameAndGuestInformation(booking.id)
	})

	return (
		<>
			<Link to={`/bookings/${booking.id}`} className={style.tableRow}>
				<div className={style.cabinInfo}>
					{bookingInfo?.cabinImage?.length ? (
						<img className={style.image} src={bookingInfo.cabinImage} alt={bookingInfo.cabinName} />
					) : (
						<div className={style.defaultImage}>
							<HiOutlineHomeModern size={40} />
						</div>
					)}
					<div className={style.cabin}>{bookingInfo?.cabinName}</div>
				</div>
				<div className={style.name}>
					<div className={style.fullName}>{bookingInfo?.guestFullName}</div>
					<div className={style.email}>{bookingInfo?.guestEmail}</div>
				</div>
				<div className={style.date}>
					<span className={style.isToday}>
						{isToday(new Date(booking.startDate))
							? 'Today'
							: formatDistanceFromNow(booking.startDate)}{' '}
						&rarr; {booking.numNights} night stay
					</span>
					<span className={style.reservation}>
						{format(new Date(booking?.startDate), 'MMM dd yyyy')} &mdash;{' '}
						{format(new Date(booking?.endDate), 'MMM dd yyyy')}
					</span>
				</div>
				<Tag label={booking.status} />
				<div>{formatCurrency(booking.totalPrice)}</div>
			</Link>
		</>
	)
}
