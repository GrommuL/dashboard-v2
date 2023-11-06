import { CabinType } from 'entities/cabins/types/cabins-type'
import { ZodType, z } from 'zod'

// export const createCabinSchema: ZodType<CabinType> =

export const createCabinSchema = z
	.object({
		id: z.number().optional(),
		name: z.string().min(1, 'Enter the name of the cabin'),
		description: z.string().min(1, 'Enter the description of the cabin'),
		maxCapacity: z
			.number()
			.min(1, 'Maximum capacity should be at least 1')
			.positive('Maximum capacity should be a bigger than 0'),
		regularPrice: z.number().positive('Regular price should be a bigger than 0'),
		discount: z.number().nonnegative('Value should be a positive number'),
		image: z.string().optional(),
		createdAt: z.number().optional()
	})
	.refine((data) => data.regularPrice > data.discount, {
		message: 'Discount should be less than regular price',
		path: ['discount']
	})
