import { instance } from 'shared/config/axios-config'
import { BookingType } from '../lib/bookings-type'

export const getBookings = async (): Promise<BookingType[]> => {
	const { data } = await instance.get('bookings')

	return data
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
