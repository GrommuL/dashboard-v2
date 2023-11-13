import { Logo } from 'shared/ui/logo'
import RegisterImage from 'shared/assets/register.png'
import style from './register-page.module.scss'
import { RegisterForm } from 'features/authorization/register'

export const RegisterPage = () => {
	return (
		<section className={style.register}>
			<div className={style.left}>
				<div className={style.logo}>
					<Logo />
				</div>
				<div className={style.imageBox}>
					<img className={style.image} src={RegisterImage} alt='Error' />
				</div>
			</div>
			<div className={style.right}>
				<RegisterForm />
			</div>
		</section>
	)
}
