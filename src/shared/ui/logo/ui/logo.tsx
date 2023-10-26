import { Link } from 'react-router-dom'
import { SiTreehouse } from 'react-icons/si'
import { RoutePath } from 'shared/config/route-config'
import style from './logo.module.scss'

export const Logo = () => {
	return (
		<Link className={style.logo} to={RoutePath.main}>
			<SiTreehouse size={36} />
			<h1 className={style.title}>Dashboard</h1>
		</Link>
	)
}
