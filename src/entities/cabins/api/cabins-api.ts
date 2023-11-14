import { instance } from 'shared/config/axios-config'
import { CabinType } from '../types/cabins-type'

export const getCabins = async () => {
	try {
		const { data } = await instance.get<CabinType[]>('cabins')
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Cabins could not be loaded')
	}
}

export const getCabinById = async (id: number) => {
	try {
		const { data } = await instance.get<CabinType>(`cabins/${id}`)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be loaded')
	}
}

export const deleteCabin = async (id: number) => {
	try {
		await instance.delete(`cabins/${id}`)
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be deleted')
	}
}

export const createCabin = async (cabin: CabinType) => {
	try {
		await instance.post('cabins', cabin)
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be created')
	}
}

export const editCabin = async ({ cabin, id }: { cabin: CabinType; id: number }) => {
	try {
		await instance.patch(`cabins/${id}`, cabin)
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be edited')
	}
}
