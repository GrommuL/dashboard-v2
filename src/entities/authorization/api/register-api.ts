import { instance } from 'shared/config/axios-config'
import { AuthType } from '../lib/types/auth-type'

export const registerUser = async (user: AuthType) => {
	const { data } = await instance.post('register', user)
	return data
}
