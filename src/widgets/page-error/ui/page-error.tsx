import { useNavigate } from 'react-router-dom'
import { Logo } from 'shared/ui/logo'
import { Button } from 'shared/ui/buttons/button'
import { RoutePath } from 'shared/config/route-config'
import ErrorImage from 'shared/assets/error.png'
import style from './page-error.module.scss'

export const PageError = () => {
	const navigate = useNavigate()

	const reloadPage = () => {
		location.reload()
	}

	return (
		<section className={style.pageError}>
			<div className={style.left}>
				<Logo />
				<div className={style.imageBox}>
					<img className={style.image} src={ErrorImage} alt='Error' />
				</div>
			</div>
			<div className={style.right}>
				<div className={style.info}>
					<h2 className={style.title}>Упс, что-то пошло не так</h2>
					<p className={style.description}>
						Приносим извинения, мы исправляем проблему. <br /> Пожалуйста, попробуйте еще раз чуть
						позже
					</p>
				</div>
				<div className={style.buttons}>
					<Button onClick={() => navigate(RoutePath.dashboard)}>Назад</Button>
					<Button onClick={reloadPage}>Обновить страницу</Button>
				</div>
			</div>
		</section>
	)
}
