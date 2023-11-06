import { instance } from 'shared/config/axios-config'
import { CabinType } from '../types/cabins-type'

export const getCabins = async (): Promise<CabinType[]> => {
	try {
		const { data } = await instance.get('cabins')
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Cabins could not be loaded')
	}
}

export const getCabinById = async (id: number) => {
	try {
		const { data } = await instance.get(`cabins/${id}`)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be loaded')
	}
}

export const deleteCabin = async (id: number) => {
	try {
		const { data } = await instance.delete(`cabins/${id}`)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be deleted')
	}
}

export const createCabin = async (cabin: CabinType) => {
	try {
		const { data } = await instance.post('cabins', cabin)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be created')
	}
}

export const editCabin = async ({ cabin, id }: { cabin: CabinType; id: number }) => {
	try {
		const { data } = await instance.patch(`cabins/${id}`, cabin)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Cabin could not be edited')
	}
}
