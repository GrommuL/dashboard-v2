import { FC, ReactElement, ReactNode, cloneElement, useContext } from 'react'
import { ModalContext } from '../lib/modal-context'

interface OpenProps {
	children: ReactNode
	opens: string
}

export const Open: FC<OpenProps> = ({ children, opens: opensWindowName }) => {
	const { open } = useContext(ModalContext)
	return cloneElement(children as ReactElement, { onClick: () => open(opensWindowName) })
}
