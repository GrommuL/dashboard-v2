import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/sidebar'
import { Header } from 'widgets/header'
import { Toaster } from 'react-hot-toast'
import style from './app-layout.module.scss'

export const AppLayout = () => {
	return (
		<div className={style.appLayout}>
			<Header />
			<Sidebar />
			<main className={style.main}>
				<Outlet />
			</main>
			<Toaster
				position='top-center'
				gutter={12}
				containerStyle={{ margin: '8px' }}
				toastOptions={{
					success: {
						duration: 3000
					},
					error: {
						duration: 3000
					},
					style: {
						fontSize: '16px',
						maxWidth: '500px',
						padding: '16px 24px',
						backgroundColor: 'var(--notification-bg-color)',
						color: 'var(--text-color)',
						border: '1px solid var(--header-border-color)',
						boxShadow: 'var(--drop-shadow-black)'
					}
				}}
			/>
		</div>
	)
}
