import { ReactNode } from 'react'
import style from './header.module.scss'

interface HeaderProps {
	children: ReactNode
	columns: string
}

export const Header = ({ children, columns }: HeaderProps) => {
	return (
		<div className={style.header} style={{ gridTemplateColumns: columns }}>
			{children}
		</div>
	)
}
