import { UpdateSettings } from 'features/settings/update-settings'
import style from './settings-page.module.scss'
import { useTranslation } from 'react-i18next'

const SettingsPage = () => {
	const { t } = useTranslation('settings')
	return (
		<main>
			<h1 className={style.title}>{t('settings-page.title')}</h1>
			<div className={style.form}>
				<UpdateSettings />
			</div>
		</main>
	)
}

export default SettingsPage
