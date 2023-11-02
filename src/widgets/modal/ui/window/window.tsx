import { FC, ReactElement, ReactNode, cloneElement, useContext, useRef } from 'react'
import { createPortal } from 'react-dom'
import style from './window.module.scss'
import { ModalContext } from 'widgets/modal/lib/modal-context'
import { HiOutlineXMark } from 'react-icons/hi2'
import { useOutsideClick } from 'widgets/modal/lib/use-outside-click'
import { ThemeContext } from 'shared/config/theme-config'
import clsx from 'clsx'

interface WindowProps {
	children: ReactNode
	name: string
}

export const Window: FC<WindowProps> = ({ children, name }) => {
	const { theme } = useContext(ThemeContext)
	const { close, openName } = useContext(ModalContext)
	const { modalRef } = useOutsideClick(close)

	if (name !== openName) return null

	return createPortal(
		<div className={style.overlay}>
			<div ref={modalRef} className={clsx(style.modal, style[theme])}>
				<button className={style.closeBtn} onClick={close}>
					<HiOutlineXMark size={20} />
				</button>
				<div className={style.content}>
					{cloneElement(children as ReactElement, { onCloseModal: close })}
				</div>
			</div>
		</div>,
		document.body
	)
}
