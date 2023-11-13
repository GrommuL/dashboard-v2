import { Input } from 'shared/ui/inputs'
import style from './register-form.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthType } from 'entities/authorization/lib/types/auth-type'
import { Button } from 'shared/ui/buttons/button'
import { useMutation } from '@tanstack/react-query'
import { registerSchema, registerUser } from 'entities/authorization'
import { zodResolver } from '@hookform/resolvers/zod'

export const RegisterForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<AuthType>({
		mode: 'onBlur',
		resolver: zodResolver(registerSchema)
	})

	const { mutate } = useMutation({
		mutationFn: registerUser
	})

	const onSubmit: SubmitHandler<AuthType> = (data) => {
		mutate(data)
		reset()
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<Input
				inputProps={{
					...register('fullName', {
						required: true
					}),
					placeholder: 'Enter your full name'
				}}
				registerId='fullName'
				label='Full name'
				error={errors.fullName}
			/>
			<Input
				inputProps={{
					...register('email', {
						required: true
					}),
					placeholder: 'Enter your email',
					type: 'email'
				}}
				registerId='email'
				label='Email'
				error={errors.email}
			/>
			<Input
				inputProps={{
					...register('password', {
						required: true
					}),
					placeholder: 'Enter your password',
					type: 'password'
				}}
				registerId='password'
				label='Password'
				error={errors.password}
			/>
			<Button type='submit'>Register</Button>
		</form>
	)
}
