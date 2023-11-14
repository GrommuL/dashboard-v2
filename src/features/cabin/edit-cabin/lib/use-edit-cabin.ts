import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useCreateCabinSchema, CabinType, editCabin } from 'entities/cabins'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export const useEditCabin = (onCloseModal: () => void, editToCabin: CabinType) => {
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

	const { mutate: editCabinFromForm } = useMutation({
		mutationKey: ['cabins'],
		mutationFn: editCabin,
		onSuccess: () => {
			toast.success(t('form.edit-success'))
			reset()
			onCloseModal()
			queryClient.invalidateQueries({
				queryKey: ['cabins']
			})
		},
		onError: () => {
			toast.error(t('form.edit-error'))
		}
	})

	const onSubmit: SubmitHandler<CabinType> = (data) => {
		const cabin = { ...data }
		const id = editToCabin?.id

		editCabinFromForm({ cabin, id })
	}

	return {
		register,
		errors,
		handleSubmit,
		onSubmit
	}
}
