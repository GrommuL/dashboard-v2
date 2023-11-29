import { format, isToday } from 'date-fns'
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCheckCircle,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern
} from 'react-icons/hi2'
import style from './booking-data-box.module.scss'
import { BookingWithCabinInformationAndGuestInformation } from 'entities/bookings'
import { formatCurrency } from 'shared/lib/format-currency'
import { useFormatDistanceFromNow } from 'shared/lib/format-distance-from-now'
import { useTranslation } from 'react-i18next'
import { enUS, ru } from 'date-fns/locale'
import { formatNightsStay } from 'shared/lib/format-nights-stay'
import { formatNumberOfGuests } from 'shared/lib/format-number-of-guests'

export const BookingDataBox = ({
	booking
}: {
	booking: BookingWithCabinInformationAndGuestInformation
}) => {
	const { i18n } = useTranslation()
	const { t } = useTranslation('booking')
	const createdAt = booking.createdAt || Date.now()
	const formattedCreatedAt = new Date(createdAt).toISOString()
	const { formatDistanceFromNow } = useFormatDistanceFromNow()

	return (
		<div className={style.dataBox}>
			<div className={style.boxHeader}>
				<div className={style.boxInfo}>
					<HiOutlineHomeModern />
					<p className={style.boxTitle}>
						{i18n.language === 'en'
							? `${booking?.numNights} nights in Cabin`
							: `${booking?.numNights} ${formatNightsStay(booking?.numNights)} в доме`}{' '}
						<span>{booking.cabinName}</span>
					</p>
				</div>
				<p className={style.dataBoxDatePeriod}>
					{format(new Date(booking.startDate), 'EEEE, MMM dd yyyy', {
						locale: i18n.language === 'en' ? enUS : ru
					})}{' '}
					(
					{isToday(new Date(booking.startDate))
						? `${t('today')}`
						: formatDistanceFromNow(booking.startDate)}
					) &mdash;{' '}
					{format(new Date(booking.endDate), 'EEEE, MMM dd yyyy', {
						locale: i18n.language === 'en' ? enUS : ru
					})}
				</p>
			</div>

			<div className={style.guestBlock}>
				<div className={style.guest}>
					{booking.guestFlag && (
						<img className={style.flag} src={booking.guestFlag} alt={`Flag of country`} />
					)}
					<p>
						{booking.numGuests > 1 &&
							`+ ${booking.numGuests - 1} ${
								i18n.language === 'en' ? 'guests' : formatNumberOfGuests(booking.numGuests - 1)
							}`}
					</p>
					<span>&bull;</span>
					<p>{booking.guestEmail}</p>
					<span>&bull;</span>
					<p>
						{t('national-id')} {booking.guestCountryId}
					</p>
				</div>

				{booking.observations && (
					<div className={style.dataItem}>
						<div className={style.dataItemTitle}>
							<HiOutlineChatBubbleBottomCenterText />
							{t('observations')}:
						</div>
						<div>{booking.observations}</div>
					</div>
				)}

				<div className={style.dataItem}>
					<div className={style.dataItemTitle}>
						<HiOutlineCheckCircle />
						{t('breakfast-included')}?
					</div>
					<div>{booking.hasBreakfast ? `${t('yes')}` : `${t('no')}`}</div>
				</div>

				<div className={style[`${booking.isPaid ? 'priceIsPayed' : 'priceIsNotPayed'}`]}>
					<div className={style.dataItem}>
						<div className={style.dataItemTitle}>
							<HiOutlineCurrencyDollar />
							{t('total-price')}
						</div>
						<div>
							{formatCurrency(booking.totalPrice)}
							{booking.hasBreakfast &&
								` (${formatCurrency(booking.cabinPrice)} ${t('cabin')} + ${formatCurrency(
									booking.extraPrice
								)} ${t('breakfast')})`}
						</div>

						<p>{booking.isPaid ? `${t('paid')}` : `${t('will-pay-at-property')}`}</p>
					</div>
				</div>

				<div className={style.footer}>
					<p className={style.dateBooked}>
						{t('booked')}{' '}
						{format(new Date(formattedCreatedAt), 'EEEE, MMM dd yyyy, p', {
							locale: i18n.language === 'en' ? enUS : ru
						})}
					</p>
				</div>
			</div>
		</div>
	)
}
