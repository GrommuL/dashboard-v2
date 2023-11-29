import { Input, TextArea } from 'shared/ui/inputs'
import { Button } from 'shared/ui/buttons/button'
import style from './create-cabin-form.module.scss'
import { useTranslation } from 'react-i18next'
import { useCreateCabin } from '../../lib/use-create-cabin'

interface CreateCabinFormProps {
	onCloseModal?: () => void
}

export const CreateCabinForm = ({ onCloseModal }: CreateCabinFormProps) => {
	const { t } = useTranslation('cabins')
	const { register, errors, handleSubmit, onSubmit } = useCreateCabin(onCloseModal)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<Input
				inputProps={{
					...register('name', { required: true }),
					placeholder: `${t('form.inputs.name-placeholder')}`,
					type: 'text'
				}}
				registerId='name'
				label={t('form.inputs.name-label')}
				error={errors.name}
			/>
			<TextArea
				textAreaProps={{
					...register('description', { required: true }),
					placeholder: `${t('form.inputs.description-placeholder')}`
				}}
				registerId='description'
				label={t('form.inputs.description-label')}
				error={errors.description}
			/>
			<Input
				inputProps={{
					...register('maxCapacity', {
						required: true,
						valueAsNumber: true,
						validate: (value: unknown) => typeof value === 'number' && value >= 0
					}),
					placeholder: `${t('form.inputs.max-capacity-placeholder')}`,
					type: 'number'
				}}
				registerId='maxCapacity'
				label={t('form.inputs.max-capacity-label')}
				error={errors.maxCapacity}
			/>
			<Input
				inputProps={{
					...register('regularPrice', {
						required: true,
						valueAsNumber: true,
						validate: (value: unknown) => typeof value === 'number' && value >= 0
					}),
					placeholder: `${t('form.inputs.regular-price-placeholder')}`,
					type: 'number'
				}}
				registerId='regularPrice'
				label={t('form.inputs.regular-price-label')}
				error={errors.regularPrice}
			/>
			<Input
				inputProps={{
					...register('discount', {
						required: true,
						valueAsNumber: true,
						validate: (value: unknown) => typeof value === 'number' && value >= 0
					}),
					placeholder: `${t('form.inputs.discount-placeholder')}`,
					type: 'number'
				}}
				registerId='discount'
				label={t('form.inputs.discount-label')}
				error={errors.discount}
			/>
			<Input
				inputProps={{
					...register('image'),
					placeholder: `${t('form.inputs.image-placeholder')}`,
					type: 'text'
				}}
				registerId='image'
				label={t('form.inputs.image-label')}
				error={errors.image}
			/>
			<div className={style.buttons}>
				<Button variant='primary' size='fixed' type='submit' onClick={onCloseModal}>
					{t('form.cancel-button')}
				</Button>
				<Button size='fixed' type='submit'>
					{t('form.create-button')}
				</Button>
			</div>
		</form>
	)
}
