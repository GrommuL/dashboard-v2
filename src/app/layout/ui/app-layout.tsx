import { Outlet } from 'react-router-dom'
import style from './app-layout.module.scss'

export const AppLayout = () => {
  return (
    <div className={style.appLayout}>
      <div>sidebar</div>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  )
}
