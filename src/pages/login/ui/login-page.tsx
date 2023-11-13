import { Logo } from 'shared/ui/logo'
import LoginImage from 'shared/assets/login.png'
import style from './login-page.module.scss'
import { LoginForm } from 'features/authorization/login'

export const LoginPage = () => {
	return (
		<section className={style.login}>
			<div className={style.left}>
				<div className={style.logo}>
					<Logo />
				</div>
				<div className={style.imageBox}>
					<img className={style.image} src={LoginImage} alt='Error' />
				</div>
			</div>
			<div className={style.right}>
				<LoginForm />
			</div>
		</section>
	)
}
