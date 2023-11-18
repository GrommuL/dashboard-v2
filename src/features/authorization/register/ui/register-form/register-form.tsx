import { Input } from 'shared/ui/inputs'
import style from './register-form.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthType } from 'entities/authorization/lib/types/auth-type'
import { Button } from 'shared/ui/buttons/button'
import { useMutation } from '@tanstack/react-query'
import { registerSchema, registerUser } from 'entities/authorization'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'

export const RegisterForm = () => {
	const navigate = useNavigate()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<AuthType>({
		mode: 'onBlur',
		resolver: zodResolver(registerSchema)
	})

	const { mutate, error } = useMutation({
		mutationKey: ['user'],
		mutationFn: registerUser,
		onSuccess: (data) => {
			navigate('/dashboard')
			toast.success(`Welcome, ${data.fullName}`)
		},
		onError: (err: AxiosError) => err
	})

	const onSubmit: SubmitHandler<AuthType> = (data) => {
		mutate(data)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<p>
				{error?.response.status === 400 &&
					'The email address is already being used! Please use a different email!'}
			</p>
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
			<Input
				inputProps={{
					...register('confirmPassword', {
						required: true
					}),
					placeholder: 'Repeat password',
					type: 'password'
				}}
				registerId='confirmPassword'
				label='Confirm Password'
				error={errors.confirmPassword}
			/>
			<Button type='submit'>Register</Button>
		</form>
	)
}
