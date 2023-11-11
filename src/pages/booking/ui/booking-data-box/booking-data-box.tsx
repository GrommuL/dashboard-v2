import { format, isToday } from 'date-fns'
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern
} from 'react-icons/hi2'
import style from './booking-data-box.module.scss'
import { BookingWithCabinInformationAndGuestInformation } from 'entities/bookings'
import { formatDistanceFromNow } from 'shared/lib/format-distance-from-now'
import { formatCurrency } from 'shared/lib/format-currency'

export const BookingDataBox = ({
	booking
}: {
	booking: BookingWithCabinInformationAndGuestInformation
}) => {
	const createdAt = booking.createdAt || Date.now()
	const formattedCreatedAt = new Date(createdAt).toISOString()

	return (
		<div className={style.dataBox}>
			<div className={style.boxHeader}>
				<div className={style.boxInfo}>
					<HiOutlineHomeModern />
					<p className={style.boxTitle}>
						{booking.numNights} nights in Cabin <span>{booking.cabinName}</span>
					</p>
				</div>
				<p>
					{format(new Date(booking.startDate), 'EEE, MMM dd yyyy')} (
					{isToday(new Date(booking.startDate))
						? 'Today'
						: formatDistanceFromNow(booking.startDate)}
					) &mdash; {format(new Date(booking.endDate), 'EEE, MMM dd yyyy')}
				</p>
			</div>

			<div className={style.guestBlock}>
				<div className={style.guest}>
					{booking.guestFlag && (
						<img className={style.flag} src={booking.guestFlag} alt={`Flag of country`} />
					)}
					<p>{booking.numGuests > 1 ? `+ ${booking.numGuests - 1} guests` : ''}</p>
					<span>&bull;</span>
					<p>{booking.guestEmail}</p>
					<span>&bull;</span>
					<p>National ID {booking.guestCountryId}</p>
				</div>

				{booking.observations && (
					<div className={style.dataItem}>
						<div className={style.dataItemTitle}>
							<HiOutlineChatBubbleBottomCenterText />
							Observations
						</div>
						<div>{booking.observations}</div>
					</div>
				)}

				<div className={style.dataItem}>
					<div className={style.dataItemTitle}>
						<HiOutlineCheckCircle />
						Breakfast included?
					</div>
					<div>{booking.hasBreakfast ? 'Yes' : 'No'}</div>
				</div>

				<div className={style[`${booking.isPaid ? 'priceIsPayed' : 'priceIsNotPayed'}`]}>
					<div className={style.dataItem}>
						<div className={style.dataItemTitle}>
							<HiOutlineCurrencyDollar />
							Total price
						</div>
						<div>
							{formatCurrency(booking.totalPrice)}
							{booking.hasBreakfast &&
								` (${formatCurrency(booking.cabinPrice)} cabin + ${formatCurrency(
									booking.extraPrice
								)} breakfast)`}
						</div>

						<p>{booking.isPaid ? 'Paid' : 'Will pay at property'}</p>
					</div>
				</div>

				<div className={style.footer}>
					<p>Booked {format(new Date(formattedCreatedAt), 'EEE, MMM dd yyyy, p')}</p>
				</div>
			</div>
		</div>
	)
}
