import { GuestType, createGuest } from 'entities/guests'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from 'shared/ui/inputs'
import style from './create-guest-form.module.scss'
import { countries } from 'shared/lib/constants/countries'
import { Button } from 'shared/ui/buttons/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { SelectCountry } from 'shared/ui/select-country'

interface CreateGuestFormProps {
	onCloseModal?: () => void
}

export const CreateGuestForm = ({ onCloseModal }: CreateGuestFormProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<GuestType>({
		mode: 'onBlur'
	})

	const queryClient = useQueryClient()

	const { mutate: createGuestFromForm } = useMutation({
		mutationKey: ['guests'],
		mutationFn: createGuest,
		onSuccess: () => {
			toast.success('Guest successfully created')
			reset()
			onCloseModal()
			queryClient.invalidateQueries({
				queryKey: ['guests']
			})
		},
		onError: () => {
			toast.error('Can not create a guest')
		}
	})

	const onSubmit: SubmitHandler<GuestType> = (data) => {
		const country = countries.find((country) => country.country === data.nationality)

		const createdGuest: GuestType = {
			fullName: data.fullName,
			email: data.email,
			nationalID: data.nationalID,
			nationality: country.country,
			countryFlag: `https://flagcdn.com/${country.flag}.svg`,
			createdAt: Date.now()
		}

		createGuestFromForm(createdGuest)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<Input
				inputProps={{
					...register('fullName', { required: true }),
					placeholder: 'Full Name',
					type: 'text'
				}}
				registerId='fullName'
				label='Full Name'
				error={errors.fullName}
			/>
			<Input
				inputProps={{
					...register('email', { required: true }),
					placeholder: 'Email',
					type: 'email'
				}}
				registerId='email'
				label='Email'
				error={errors.email}
			/>
			<Input
				inputProps={{
					...register('nationalID', { required: true }),
					placeholder: 'National ID',
					type: 'number'
				}}
				registerId='nationalID'
				label='National ID'
				error={errors.nationalID}
			/>
			<SelectCountry options={countries} {...register('nationality', { required: true })} />

			<Button type='submit'>Create Guest</Button>
		</form>
	)
}
