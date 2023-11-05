import { Button } from 'shared/ui/buttons/button'
import style from './confirm-delete.module.scss'
import { useTranslation } from 'react-i18next'

interface ConfirmDeleteProps {
	deleteName: string
	onConfirm: () => void
	disabled: boolean
	onCloseModal?: () => void
}

export const ConfirmDelete = ({
	deleteName,
	disabled,
	onConfirm,
	onCloseModal
}: ConfirmDeleteProps) => {
	const { t } = useTranslation()

	return (
		<div className={style.confirmDelete}>
			<h3 className={style.title}>
				{t('confirm-delete.title')} {deleteName}
			</h3>
			<p className={style.question}>
				{t('confirm-delete.question-first-part')} {deleteName}
				{t('confirm-delete.question-second-part')}
			</p>
			<div className={style.buttons}>
				<Button variant='primary' size='fixed' disabled={disabled} onClick={onCloseModal}>
					{t('confirm-delete.cancel-button')}
				</Button>
				<Button variant='default' size='fixed' disabled={disabled} onClick={onConfirm}>
					{t('confirm-delete.delete-button')}
				</Button>
			</div>
		</div>
	)
}
