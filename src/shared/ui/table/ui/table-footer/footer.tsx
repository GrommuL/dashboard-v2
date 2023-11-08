import { ReactNode } from 'react'
import style from './footer.module.scss'

interface FooterProps {
	children: ReactNode
}

export const Footer = ({ children }: FooterProps) => {
	return <div className={style.footer}>{children}</div>
}
