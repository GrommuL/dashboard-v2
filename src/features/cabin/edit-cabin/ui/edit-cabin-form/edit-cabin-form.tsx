import { CabinType } from 'entities/cabins'
import { Button } from 'shared/ui/buttons/button'
import { Input, TextArea } from 'shared/ui/inputs'
import style from './edit-cabin-form.module.scss'
import { useTranslation } from 'react-i18next'
import { useEditCabin } from '../../lib/use-edit-cabin'

interface EditCabinFormProps {
	onCloseModal?: () => void
	editToCabin: CabinType
}

export const EditCabinForm = ({ onCloseModal, editToCabin }: EditCabinFormProps) => {
	const { t } = useTranslation('cabins')
	const { errors, handleSubmit, register, onSubmit } = useEditCabin(onCloseModal, editToCabin)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<Input
				inputProps={{
					...register('name', { required: true }),
					placeholder: `${t('form.inputs.name-placeholder')}`,
					defaultValue: editToCabin && editToCabin.name,
					type: 'text'
				}}
				registerId='name'
				label={t('form.inputs.name-label')}
				error={errors.name}
			/>
			<TextArea
				textAreaProps={{
					...register('description', { required: true }),
					placeholder: `${t('form.inputs.description-placeholder')}`,
					defaultValue: editToCabin && editToCabin.description
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
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					placeholder: `${t('form.inputs.max-capacity-placeholder')}`,
					defaultValue: editToCabin ? editToCabin.maxCapacity : 0,
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
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					placeholder: `${t('form.inputs.regular-price-placeholder')}`,
					defaultValue: editToCabin ? editToCabin.regularPrice : 0,
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
						validate: (value) => typeof value === 'number' && value >= 0
					}),
					placeholder: `${t('form.inputs.discount-placeholder')}`,
					defaultValue: editToCabin ? editToCabin.discount : 0,
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
					defaultValue: editToCabin && editToCabin.image,
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
					{t('form.edit-button')}
				</Button>
			</div>
		</form>
	)
}
