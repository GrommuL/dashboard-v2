import { UpdateSettings } from 'features/settings/update-settings'
import style from './settings-page.module.scss'

const SettingsPage = () => {
	return (
		<main>
			<h1 className={style.title}>Update hotel settings</h1>
			<div className={style.form}>
				<UpdateSettings />
			</div>
		</main>
	)
}

export default SettingsPage
