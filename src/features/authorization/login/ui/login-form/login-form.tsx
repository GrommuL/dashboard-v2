import toast from 'react-hot-toast'
import { Input } from 'shared/ui/inputs'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthType } from 'entities/authorization/lib/types/auth-type'
import { Button } from 'shared/ui/buttons/button'
import { useMutation } from '@tanstack/react-query'
import { loginSchema, loginUser } from 'entities/authorization'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import style from './login-form.module.scss'

export const LoginForm = () => {
	const navigate = useNavigate()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<AuthType>({
		mode: 'onBlur',
		resolver: zodResolver(loginSchema)
	})

	const { mutate } = useMutation({
		mutationFn: loginUser,
		onSuccess: (data) => {
			navigate('/dashboard')
			toast.success(`Welcome, ${data.fullName}`)
		},
		onError: (err: AxiosError) => err
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
			<Button type='submit'>Login</Button>
		</form>
	)
}
