import { ReactNode, useState } from 'react'
import { ModalContext } from '../lib/modal-context'
import { Open } from './open'
import { Window } from './window/window'

interface ModalProps {
	children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
	const [openName, setOpenName] = useState('')

	const close = () => setOpenName('')
	const open = setOpenName

	return <ModalContext.Provider value={{ openName, close, open }}>{children}</ModalContext.Provider>
}

Modal.Open = Open
Modal.Window = Window
