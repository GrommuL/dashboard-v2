import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/sidebar'
import { Header } from 'widgets/header'
import style from './app-layout.module.scss'

export const AppLayout = () => {
	return (
		<div className={style.appLayout}>
			<Header />
			<Sidebar />
			<main className={style.main}>
				<Outlet />
			</main>
		</div>
	)
}
