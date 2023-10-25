import { useLanguage } from '../model/use-language'
import USAFlag from 'shared/assets/united-states-of-america.png'
import RussianFederationFlag from 'shared/assets/russian-federation.png'
import style from './language-toggler.module.scss'

export const LanguageToggler = () => {
	const { i18n, toggleLanguage } = useLanguage()

	return (
		<button className={style.button} onClick={toggleLanguage}>
			<img
				className={style.flag}
				src={i18n.language === 'ru' ? USAFlag : RussianFederationFlag}
				alt='Flag'
			/>
			<span>{i18n.language === 'ru' ? 'En' : 'Ru'}</span>
		</button>
	)
}
