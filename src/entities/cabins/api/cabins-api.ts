import { instance } from 'shared/config/axios-config'
import { CabinType } from '../types/cabinsType'

export const getCabins = async (): Promise<CabinType[]> => {
	const { data } = await instance.get('cabins')
	return data
}

export const getCabinById = async (id: number) => {
	const { data } = await instance.get(`cabins/${id}`)
	return data
}

export const deleteCabin = async (id: number) => {
	const { data } = await instance.delete(`cabins/${id}`)
	return data
}

export const createCabin = async (cabin: CabinType) => {
	const { data } = await instance.post('cabins', cabin)
	return data
}

export const editCabin = async (cabin: CabinType, id: number) => {
	const { data } = await instance.patch(`cabins/${id}`, cabin)
	return data
}
