import { IconType } from 'react-icons/lib'
import style from './stat.module.scss'

interface StatProps {
	icon: IconType
	title: string
	value: string | number
	color: string
}

export const Stat = ({ color, title, value, icon: Icon }: StatProps) => {
	return (
		<div className={style.stat}>
			<div className={style.icon} style={{ backgroundColor: color }}>
				<Icon />
			</div>
			<h5 className={style.title}>{title}</h5>
			<p className={style.value}>{value}</p>
		</div>
	)
}
