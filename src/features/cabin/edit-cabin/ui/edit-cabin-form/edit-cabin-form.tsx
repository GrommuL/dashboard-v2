import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { CabinType, createCabin, editCabin } from 'entities/cabins'
import { createCabinSchema } from 'entities/cabins/lib/schema/createCabinSchema'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from 'shared/ui/buttons/button'
import { Input, TextArea } from 'shared/ui/inputs'
import style from './edit-cabin-form.module.scss'

interface EditCabinFormProps {
	onCloseModal?: () => void
	editToCabin: CabinType
}

export const EditCabinForm = ({ onCloseModal, editToCabin }: EditCabinFormProps) => {
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

	const { mutate: editCabinFromForm } = useMutation({
		mutationKey: ['cabins'],
		mutationFn: editCabin,
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
		const cabin = { ...data }
		const id = editToCabin?.id

		editCabinFromForm({ cabin, id })
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<Input
				inputProps={{
					...register('name', { required: true }),
					placeholder: 'Name',
					defaultValue: editToCabin && editToCabin.name,
					type: 'text'
				}}
				registerId='name'
				label='Cabin name'
				error={errors.name}
			/>
			<TextArea
				textAreaProps={{
					...register('description', { required: true }),
					placeholder: 'Write a description of the cabin...',
					defaultValue: editToCabin && editToCabin.description
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
					defaultValue: editToCabin ? editToCabin.maxCapacity : 0,
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
					defaultValue: editToCabin ? editToCabin.regularPrice : 0,
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
					defaultValue: editToCabin ? editToCabin.discount : 0,
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
					defaultValue: editToCabin && editToCabin.image,
					type: 'text'
				}}
				registerId='image'
				label='Image'
				error={errors.image}
			/>
			<Button size='fixed' type='submit'>
				Edit
			</Button>
		</form>
	)
}
