export type BookingResponse = {
	items: BookingType[]
	meta: BookingResponseMeta
}

export type BookingResponseMeta = {
	current_page: number
	per_page: number
	remaining_count: number
	total_items: number
	total_pages: number
}

export type BookingType = {
	id?: number
	startDate: string
	endDate: string
	numNights: number
	numGuests: number
	cabinPrice: number
	extraPrice: number
	totalPrice: number
	status: BookingStatus
	hasBreakfast: boolean
	isPaid: boolean
	observations: string
	cabinId: number
	guestId: number
	createdAt?: number
}

export type BookingStatus = 'unconfirmed' | 'confirmed' | 'checked-in' | 'checked-out'

export interface BookingWithCabinInformationAndGuestInformation extends BookingType {
	cabinName: string
	cabinImage: string
	guestFullName: string
	guestEmail: string
	guestFlag: string
	guestCountryId: string
}
