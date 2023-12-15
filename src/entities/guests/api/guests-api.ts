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
