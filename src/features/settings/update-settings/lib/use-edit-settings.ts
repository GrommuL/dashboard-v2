import { useMutation, useQuery } from '@tanstack/react-query'
import { SettingsType, editSettings, getSettings } from 'entities/settings'
import { SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useEditSettings = () => {
	const { data: settings } = useQuery({
		queryKey: ['settings'],
		queryFn: getSettings
	})
	const { mutate: editSetting } = useMutation({
		mutationKey: ['settings'],
		mutationFn: editSettings,
		onSuccess: () => {
			toast.success('Settings is successfully edited')
		},
		onError: () => {
			toast.error('Could not edit a settings')
		}
	})

	const settingItem = settings?.[0]

	const onSubmit: SubmitHandler<SettingsType> = async (data) => {
		const editedSetting = {
			...settingItem,
			...data
		}
		console.log(editedSetting)

		if (settingItem) editSetting({ settingsId: settingItem?.id, settingsData: editedSetting })
	}

	return { settingItem, onSubmit }
}
