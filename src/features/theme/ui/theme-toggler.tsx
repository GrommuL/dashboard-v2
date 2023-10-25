import { BiSun } from 'react-icons/bi'
import { BsMoonStars } from 'react-icons/bs'
import { Switch } from 'shared/ui/inputs'
import { useTheme, ThemeVariants } from 'shared/config/theme-config'
import style from './theme-toggler.module.scss'
import { useTranslation } from 'react-i18next'

export const ThemeToggler = () => {
	const { theme, toggleTheme } = useTheme()
	const { t } = useTranslation()

	return (
		<div className={style.toggler}>
			<div className={style.info}>
				{theme === ThemeVariants.DARK ? <BiSun size={24} /> : <BsMoonStars size={20} />}
				<span>
					{theme === ThemeVariants.DARK ? t('theme-switcher.light') : t('theme-switcher.dark')}{' '}
					{t('theme-switcher.theme')}
				</span>
			</div>
			<Switch
				id='themeToggler'
				onChange={toggleTheme}
				defaultChecked={theme === ThemeVariants.DARK}
			/>
		</div>
	)
}
