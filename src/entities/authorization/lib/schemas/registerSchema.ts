import { z } from 'zod'

export const registerSchema = z
	.object({
		id: z.number().optional(),
		fullName: z
			.string()
			.min(2, { message: 'Имя должно состоять минимум из двух символов' })
			.max(50),
		email: z
			.string()
			.nonempty('Введите Вашу почту')
			.email('Неправильно введена почта. Пример почты: "example@expample.com"')
			.refine((value) => !/\s/.test(value), 'Почта не должна содержать пробелы'),
		password: z
			.string()
			.regex(new RegExp('.*[A-Z].*'), 'Пароль должен содержать минимум одну заглавную букву')
			.regex(new RegExp('.*\\d.*'), 'Пароль должен содержать минимум одну цифру')
			.regex(
				new RegExp('.*[!$#%].*'),
				'Пароль должен содержать минимум один символ из скобок (!$#%)'
			)
			.min(8, { message: 'Минимальная длинна пароля должна быть 8 символов' })
			.max(20)
			.refine((value) => !/\s/.test(value), 'Пароль не должен содержать пробелы'),
		confirmPassword: z.string().nonempty('Введите пароль повторно')
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароль не совпадает',
		path: ['confirmPassword']
	})
