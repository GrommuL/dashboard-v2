import { NavLink } from 'react-router-dom'
import {
	HiOutlineHome,
	HiOutlineCalendarDays,
	HiOutlineHomeModern,
	HiOutlineCog6Tooth,
	HiOutlineUsers
} from 'react-icons/hi2'
import style from './navigation.module.scss'
import { RoutePath } from 'shared/config/route-config'
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
	const { t } = useTranslation()

	return (
		<nav className={style.nav}>
			<ul className={style.navList}>
				<li>
					<NavLink className={style.navLink} to={RoutePath.dashboard}>
						<div className={style.navIcon}>
							<HiOutlineHome size={28} />
						</div>
						<span>{t('dashboard.home')}</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={style.navLink} to={RoutePath.bookings}>
						<div className={style.navIcon}>
							<HiOutlineCalendarDays size={28} />
						</div>
						<span>{t('dashboard.bookings')}</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={style.navLink} to={RoutePath.cabins}>
						<div className={style.navIcon}>
							<HiOutlineHomeModern size={28} />
						</div>
						<span>{t('dashboard.cabins')}</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={style.navLink} to={RoutePath.users}>
						<div className={style.navIcon}>
							<HiOutlineUsers size={28} />
						</div>
						<span>{t('dashboard.users')}</span>
					</NavLink>
				</li>
				<li>
					<NavLink className={style.navLink} to={RoutePath.settings}>
						<div className={style.navIcon}>
							<HiOutlineCog6Tooth size={28} />
						</div>
						<span>{t('dashboard.settings')}</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
