import { useQuery } from '@tanstack/react-query'
import { getBookingByIdWithCabinNameAndGuestInformation } from 'entities/bookings'
import { useParams, useNavigate } from 'react-router-dom'
import { Loader } from 'shared/ui/loaders'
import style from './booking-page.module.scss'
import { RoutePath } from 'shared/config/route-config'
import { Button } from 'shared/ui/buttons/button'
import { Tag } from 'shared/ui/tag'
import { BookingDataBox } from './booking-data-box/booking-data-box'
import { useChangeStatus } from 'features/bookings/change-status'
import { useDeleteBooking } from 'features/bookings/delete-booking'
import { ConfirmDelete } from 'features/confirm-delete'
import { Modal } from 'shared/ui/modal'
import { useTranslation } from 'react-i18next'

const BookingPage = () => {
	const { t } = useTranslation('booking')
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

	if (isLoading) return <Loader />

	return (
		<>
			<div className={style.booking}>
				<header className={style.header}>
					<h1>
						{t('booking')} #{booking?.id}
					</h1>
					{booking && <Tag label={booking?.status} />}
				</header>
				<Button variant='empty' onClick={() => navigate(RoutePath.bookings)}>
					&larr; {t('back-button-label')}
				</Button>
			</div>
			<div className={style.details}>
				<BookingDataBox booking={booking} />
				<div className={style.detailsButtons}>
					<Modal>
						<Modal.Open opens='delete-booking'>
							<Button size='fixed' onClick={handleDeleteBooking}>{`${t(
								'delete-booking'
							)} #${booking?.id}`}</Button>
						</Modal.Open>
						<Modal.Window name='delete-booking'>
							<ConfirmDelete
								deleteName={`${t('booking')} #${booking?.id}`}
								disabled={false}
								onConfirm={handleDeleteBooking}
							/>
						</Modal.Window>
					</Modal>

					{booking.status !== 'checked-in' && booking.status !== 'checked-out' && (
						<Button size='fixed' variant='secondary' onClick={handleChangeStatusToCheckedIn}>{`${t(
							'check-in-booking-button-label'
						)} #${booking?.id}`}</Button>
					)}
					{booking.status === 'checked-in' && (
						<Button size='fixed' variant='secondary' onClick={handleChangeStatusToCheckedOut}>{`${t(
							'check-out-booking-button-label'
						)} #${booking?.id}`}</Button>
					)}
				</div>
			</div>
		</>
	)
}

export default BookingPage
