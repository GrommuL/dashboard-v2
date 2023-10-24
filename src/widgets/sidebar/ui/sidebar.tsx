import { Logo } from './logo/logo'
import { Navigation } from './navigation/navigation'
import { ThemeToggler } from 'features/theme'
import style from './sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <Logo />
      <div className={style.menu}>
        <Navigation />
        <div>
          <ThemeToggler />
        </div>
      </div>
    </aside>
  )
}
