import { instance } from 'shared/config/axios-config'
import { SettingsType } from '../lib/setttings-type'

export const getSettings = async () => {
	const { data } = await instance.get('settings')
	return data
}

export const editSettings = async ({
	settingsId,
	settingsData
}: {
	settingsId: number | string
	settingsData: SettingsType
}) => {
	const { data } = await instance.patch(`settings/${settingsId}`, settingsData)
	return data
}
