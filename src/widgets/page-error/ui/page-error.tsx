import { useNavigate } from 'react-router-dom'
import { Logo } from 'shared/ui/logo'
import { Button } from 'shared/ui/buttons/button'
import { RoutePath } from 'shared/config/route-config'
import { useTranslation } from 'react-i18next'
import ErrorImage from 'shared/assets/error.png'
import style from './page-error.module.scss'

export const PageError = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()

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
					<h2 className={style.title}>{t('page-error.title')}</h2>
					<p className={style.description}>
						{t('page-error.description-first-part')} <br />{' '}
						{t('page-error.description-second-part')}
					</p>
				</div>
				<div className={style.buttons}>
					<Button onClick={() => navigate(RoutePath.dashboard)}>
						{t('page-error.button.back-home')}
					</Button>
					<Button onClick={reloadPage}>{t('page-error.button.reload-page')}</Button>
				</div>
			</div>
		</section>
	)
}
