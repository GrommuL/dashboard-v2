import { instance } from 'shared/config/axios-config'
import { SettingsType } from '../lib/setttings-type'

export const getSettings = async () => {
	try {
		const { data } = await instance.get<SettingsType[]>('settings')
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Settings could not be loaded')
	}
}

export const editSettings = async ({
	settingsId,
	settingsData
}: {
	settingsId: number | string
	settingsData: SettingsType
}) => {
	try {
		const { data } = await instance.patch<SettingsType>(`settings/${settingsId}`, settingsData)
		return data
	} catch (error) {
		console.log(error)
		throw new Error('Can not edit setting')
	}
}
