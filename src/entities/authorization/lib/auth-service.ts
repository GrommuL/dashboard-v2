import Cookies from 'js-cookie'

export const AuthService = () => {
	const saveTokenToStorage = (accessToken: string) => {
		Cookies.set('access-token', accessToken)
	}

	const removeTokenFromStorage = () => {
		Cookies.remove('access-token')
	}

	return { saveTokenToStorage, removeTokenFromStorage }
}
