import { ReactNode } from 'react'
import { Header } from './table-header/header'
import { Body } from './table-body/body'
import { Footer } from './table-footer/footer'
import style from './table.module.scss'

interface TableProps {
	children: ReactNode
}

export const Table = ({ children }: TableProps) => {
	return <div className={style.table}>{children}</div>
}

Table.Header = Header
Table.Body = Body
Table.Footer = Footer
