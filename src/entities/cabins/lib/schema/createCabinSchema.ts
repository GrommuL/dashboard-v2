import { useTranslation } from 'react-i18next'
import { z } from 'zod'

export const useCreateCabinSchema = () => {
	const { t } = useTranslation('cabins')

	const createCabinSchema = z
		.object({
			id: z.number().optional(),
			name: z.string().min(1, t('form.validate.name')),
			description: z.string().min(1, t('form.validate.description')),
			maxCapacity: z
				.number()
				.min(1, t('form.validate.max-capacity-min'))
				.positive(t('form.validate.max-capacity-positive')),
			regularPrice: z.number().positive(t('form.validate.regular-price-positive')),
			discount: z.number().nonnegative(t('form.validate.discount-nonnegative')),
			image: z.string().optional(),
			createdAt: z.number().optional()
		})
		.refine((data) => data.regularPrice > data.discount, {
			message: t('form.validate.discount-less-than-regular-price'),
			path: ['discount']
		})

	return { createCabinSchema }
}
