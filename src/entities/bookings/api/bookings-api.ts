import { instance } from 'shared/config/axios-config'
import { BookingType } from '../lib/bookings-type'

export const getBookings = async ({
	status,
	sort,
	order,
	limit,
	currentPage
}: {
	status: string
	sort: string
	order: string
	limit: number
	currentPage: number
}): Promise<{ data: BookingType[]; length: number }> => {
	const { data, headers } = await instance.get('bookings', {
		params: {
			status: status === 'all' ? null : status,
			_sort: sort,
			_order: order,
			_limit: limit,
			_page: currentPage
		}
	})
	return { data, length: Number(headers['x-total-count']) }
}

export const getBookingByIdWithCabinNameAndGuestInformation = async (id: number) => {
	const { data: booking } = await instance.get(`bookings/${id}`)
	const { data: cabin } = await instance.get(`cabins/${booking.cabinId}`)
	const { data: guest } = await instance.get(`guests/${booking.guestId}`)

	const bookingWithCabinNameAndGuestInformation = {
		...booking,
		cabinName: cabin.name,
		cabinImage: cabin.image,
		guestFullName: guest.fullName,
		guestEmail: guest.email
	}

	return bookingWithCabinNameAndGuestInformation
}
