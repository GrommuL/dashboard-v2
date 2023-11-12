import { useForm } from 'react-hook-form'
import { useEditSettings } from '../lib/use-edit-settings'
import { zodResolver } from '@hookform/resolvers/zod'
import { SettingsType, settingsSchema } from 'entities/settings'
import { SettingsForm } from './settings-form/settings-form'

export const UpdateSettings = () => {
	const { onSubmit, settingItem } = useEditSettings()

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<SettingsType>({
		mode: 'onBlur',
		resolver: zodResolver(settingsSchema)
	})

	return (
		<div>
			<SettingsForm
				buttonLabel='Edit settings'
				register={register}
				errors={errors}
				settingItem={settingItem}
				onSubmit={handleSubmit(onSubmit)}
			/>
		</div>
	)
}
