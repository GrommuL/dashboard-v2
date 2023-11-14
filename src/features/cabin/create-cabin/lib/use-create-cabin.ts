import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useCreateCabinSchema, CabinType, createCabin } from 'entities/cabins'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export const useCreateCabin = (onCloseModal: () => void) => {
	const { createCabinSchema } = useCreateCabinSchema()
	const { t } = useTranslation('cabins')
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
			toast.success(t('form.create-success'))
			reset()
			onCloseModal()
			queryClient.invalidateQueries({
				queryKey: ['cabins']
			})
		},
		onError: () => {
			toast.error(t('form.create-error'))
		}
	})

	const onSubmit: SubmitHandler<CabinType> = (data) => {
		const formCabinData: CabinType = {
			...data,
			createdAt: Date.now()
		}
		createCabinFromForm(formCabinData)
	}

	return {
		register,
		errors,
		handleSubmit,
		onSubmit
	}
}
