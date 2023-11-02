import { MutableRefObject, useEffect, useRef } from 'react'

export const useOutsideClick = (closeModal: () => void, options = true) => {
	const modalRef = useRef() as MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				closeModal()
			}
		}

		document.addEventListener('click', handleClick, options)

		return () => {
			document.removeEventListener('click', handleClick, options)
		}
	}, [closeModal, options])

	return {
		modalRef
	}
}
