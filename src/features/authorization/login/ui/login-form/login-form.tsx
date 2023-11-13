import { Input } from 'shared/ui/inputs'
import style from './login-form.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthType } from 'entities/authorization/lib/types/auth-type'
import { Button } from 'shared/ui/buttons/button'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from 'entities/authorization'

export const LoginForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<AuthType>({
		mode: 'onBlur'
	})

	const { mutate, data } = useMutation({
		mutationFn: loginUser
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
