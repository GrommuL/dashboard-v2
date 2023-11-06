import toast from 'react-hot-toast'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, TextArea } from 'shared/ui/inputs'
import { Button } from 'shared/ui/buttons/button'
import { CabinType, createCabin } from 'entities/cabins'
import { createCabinSchema } from 'entities/cabins/lib/schema/createCabinSchema'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import style from './create-cabin-form.module.scss'

interface CreateCabinFormProps {
	onCloseModal?: () => void
}

export const CreateCabinForm = ({ onCloseModal }: CreateCabinFormProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<CabinType>({
		mode: 'onBlur',
		resolver: zodResolver(createCabinSchema)
	})
	const queryClient = useQueryClient()

	const { mutate: createCabinFromForm } = useMutation({
		mutationKey: ['cabins'],
		mutationFn: createCabin,
		onSuccess: () => {
			toast.success('Cabin is successfully created')
			reset()
			onCloseModal()
			queryClient.invalidateQueries({
				queryKey: ['cabins']
			})
		},
		onError: () => {
			toast.error('Could not create a cabin')
		}
	})

	const onSubmit: SubmitHandler<CabinType> = (data) => {
		const formCabinData: CabinType = {
			...data,
			createdAt: Date.now()
		}
		createCabinFromForm(formCabinData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<Input
				inputProps={{
					...register('name', { required: true }),
					placeholder: 'Name',
					type: 'text'
				}}
				registerId='name'
				label='Cabin name'
				error={errors.name}
			/>
			<TextArea
				textAreaProps={{
					...register('description', { required: true }),
					placeholder: 'Write a description of the cabin...'
				}}
				registerId='description'
				label='Cabin description'
				error={errors.description}
			/>
			<Input
				inputProps={{
					...register('maxCapacity', {
						required: true,
						valueAsNumber: true,
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					placeholder: 'Capacity',
					type: 'number'
				}}
				registerId='maxCapacity'
				label='Maximum capacity'
				error={errors.maxCapacity}
			/>
			<Input
				inputProps={{
					...register('regularPrice', {
						required: true,
						valueAsNumber: true,
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					placeholder: 'Price',
					type: 'number'
				}}
				registerId='regularPrice'
				label='Regular price'
				error={errors.regularPrice}
			/>
			<Input
				inputProps={{
					...register('discount', {
						required: true,
						valueAsNumber: true,
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					placeholder: 'Discount',
					type: 'number'
				}}
				registerId='discount'
				label='Discount'
				error={errors.discount}
			/>
			<Input
				inputProps={{
					...register('image'),
					placeholder: 'Insert a link to the image',
					type: 'text'
				}}
				registerId='image'
				label='Image'
				error={errors.image}
			/>
			<Button type='submit'>Create</Button>
		</form>
	)
}
