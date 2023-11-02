import { Dispatch, SetStateAction, createContext } from 'react'

interface ModalContextType {
	openName: string
	open: Dispatch<SetStateAction<string>>
	close: () => void
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType)
