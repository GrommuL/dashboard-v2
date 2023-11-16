import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import style from './settings-form.module.scss'
import { SettingsType } from 'entities/settings'
import { Input } from 'shared/ui/inputs'
import { Button } from 'shared/ui/buttons/button'
import { useTranslation } from 'react-i18next'

interface SettingsFormProps {
	register: UseFormRegister<SettingsType>
	errors: FieldErrors<SettingsType>
	isLoading?: boolean
	onSubmit?: () => void
	buttonLabel: string
	settingItem?: SettingsType
}

export const SettingsForm: FC<SettingsFormProps> = ({
	register,
	errors,
	isLoading,
	onSubmit,
	buttonLabel,
	settingItem
}) => {
	const { t } = useTranslation('settings')

	return (
		<form onSubmit={onSubmit} className={style.form}>
			<Input
				inputProps={{
					...register('minBookingLength', {
						required: true,
						valueAsNumber: true,
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					defaultValue: settingItem?.minBookingLength,
					type: 'number',
					disabled: isLoading
				}}
				registerId='minBookingLength'
				label={t('settings-page.form.minBookingLength')}
				error={errors.minBookingLength}
			/>
			<Input
				inputProps={{
					...register('maxBookingLength', {
						required: true,
						valueAsNumber: true,
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					defaultValue: settingItem?.maxBookingLength,
					type: 'number',
					disabled: isLoading
				}}
				registerId='maxBookingLength'
				label={t('settings-page.form.maxBookingLength')}
				error={errors.maxBookingLength}
			/>
			<Input
				inputProps={{
					...register('maxGuestsPerBooking', {
						required: true,
						valueAsNumber: true,
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					defaultValue: settingItem?.maxGuestsPerBooking,
					type: 'number',
					disabled: isLoading
				}}
				registerId='maxGuestsPerBooking'
				label={t('settings-page.form.maxGuestsPerBooking')}
				error={errors.maxGuestsPerBooking}
			/>
			<Input
				inputProps={{
					...register('breakfastPrice', {
						required: true,
						valueAsNumber: true,
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					defaultValue: settingItem?.breakfastPrice,
					type: 'number',
					disabled: isLoading
				}}
				registerId='breakfastPrice'
				label={t('settings-page.form.breakfastPrice')}
				error={errors.breakfastPrice}
			/>

			<Button type='submit' disabled={isLoading}>
				{buttonLabel}
			</Button>
		</form>
	)
}
