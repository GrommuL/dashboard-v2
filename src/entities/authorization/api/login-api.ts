import { instance } from 'shared/config/axios-config'
import { AuthType } from '../lib/types/auth-type'

export const loginUser = async (user: Pick<AuthType, 'email' | 'password'>) => {
	const { data } = await instance.post('login', user)
	return data
}
