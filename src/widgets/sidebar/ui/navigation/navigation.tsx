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

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li>
          <NavLink className={style.navLink} to={RoutePath.dashboard}>
            <div className={style.navIcon}>
              <HiOutlineHome size={28} />
            </div>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to={RoutePath.bookings}>
            <div className={style.navIcon}>
              <HiOutlineCalendarDays size={28} />
            </div>
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to={RoutePath.cabins}>
            <div className={style.navIcon}>
              <HiOutlineHomeModern size={28} />
            </div>
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to={RoutePath.users}>
            <div className={style.navIcon}>
              <HiOutlineUsers size={28} />
            </div>
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to={RoutePath.settings}>
            <div className={style.navIcon}>
              <HiOutlineCog6Tooth size={28} />
            </div>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
