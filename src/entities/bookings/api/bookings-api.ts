import { instance } from 'shared/config/axios-config'
import {
	BookingResponse,
	BookingType,
	BookingWithCabinInformationAndGuestInformation
} from '../lib/bookings-type'
import { getCabinById } from 'entities/cabins'
import { getGuest } from 'entities/guests'

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
	try {
		const { data } = await instance.get<BookingResponse>('bookings', {
			params: {
				status: status === 'all' ? null : status,
				sortBy: order === 'asc' ? sort : `-${sort}`,
				limit: limit,
				page: currentPage
			}
		})

		return { data: data.items, length: data.meta.total_items }
	} catch (error) {
		console.log(error)
		throw new Error('Bookings could not be loaded')
	}
}

export const getBookingByIdWithCabinNameAndGuestInformation = async (id: number | string) => {
	try {
		const { data: booking } = await instance.get<BookingType>(`bookings/${id}`)

		const [cabin, guest] = await Promise.all([
			getCabinById(booking.cabinId),
			getGuest(booking.guestId)
		])

		const bookingWithCabinNameAndGuestInformation = {
			...booking,
			cabinName: cabin.name,
			cabinImage: cabin.image,
			guestFullName: guest.fullName,
			guestEmail: guest.email,
			guestFlag: guest.countryFlag,
			guestCountryId: guest.nationalID
		}

		return bookingWithCabinNameAndGuestInformation
	} catch (error) {
		console.log(error)
		throw new Error('Booking could not be loaded')
	}
}

export const getBookingById = async (id: string | number) => {
	try {
		const { data } = await instance.get<BookingType>(`bookings/${id}`)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Booking could not be loaded')
	}
}

export const getAllBookings = async () => {
	try {
		const { data } = await instance.get<BookingType[]>('bookings')
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Bookings could not be loaded')
	}
}

export const editBookingStatusToCheckedIn = async (bookingId: string | number) => {
	try {
		const { data } = await instance.patch<BookingWithCabinInformationAndGuestInformation>(
			`bookings/${bookingId}`,
			{ status: 'checked-in' }
		)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Booking with changed status to checked in could not be loaded')
	}
}

export const editBookingStatusToCheckedOut = async (bookingId: string | number) => {
	try {
		const { data } = await instance.patch<BookingWithCabinInformationAndGuestInformation>(
			`bookings/${bookingId}`,
			{ status: 'checked-out' }
		)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Booking with changed status to checked out could not be loaded')
	}
}

export const deleteBooking = async (bookingId: string | number) => {
	try {
		const { data } = await instance.delete<BookingType>(`bookings/${bookingId}`)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Can not delete booking')
	}
}
