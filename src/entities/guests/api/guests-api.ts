import { instance } from 'shared/config/axios-config'
import { GuestType } from '../lib/guest-type'

export const getGuest = async (id: string | number) => {
	const { data } = await instance.get<GuestType>(`guests/${id}`)
	return data
}

export const getGuests = async () => {
	const { data } = await instance.get<GuestType[]>('guests')
	return data
}

export const createGuest = async (guest: GuestType) => {
	try {
		await instance.post('guests', guest)
	} catch (error) {
		console.log(error)
		throw new Error('Guest could not be created')
	}
}

export const deleteGuest = async (id: number) => {
	try {
		await instance.delete(`guests/${id}`)
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be deleted')
	}
}
