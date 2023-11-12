import { z } from 'zod'

export const settingsSchema = z
	.object({
		id: z.number().optional(),
		minBookingLength: z
			.number()
			.min(1, 'Minimum capacity should be at least 1')
			.positive('Minimum capacity should be a bigger than 0')
			.nonnegative('Value should be a positive number'),

		maxBookingLength: z
			.number()
			.min(1, 'Minimum capacity should be at least 1')
			.positive('Minimum capacity should be a bigger than 0')
			.nonnegative('Value should be a positive number'),
		maxGuestsPerBooking: z
			.number()
			.min(1, 'Minimum capacity should be at least 1')
			.positive('Minimum capacity should be a bigger than 0')
			.nonnegative('Value should be a positive number'),
		breakfastPrice: z
			.number()
			.min(1, 'Minimum capacity should be at least 1')
			.positive('Minimum capacity should be a bigger than 0')
			.nonnegative('Value should be a positive number'),

		createdAt: z.number().optional()
	})
	.refine((data) => data.maxBookingLength > data.minBookingLength, {
		message: 'Maximum nights should be less than Minimum nights',
		path: ['maxBookingLength']
	})
