import { LanguageToggler } from 'features/language'
import style from './header.module.scss'

export const Header = () => {
	return (
		<header className={style.header}>
			<LanguageToggler />
		</header>
	)
}
