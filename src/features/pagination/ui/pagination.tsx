import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import style from './pagination.module.scss'
import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'shared/ui/buttons/button'
import { useTranslation } from 'react-i18next'

interface PaginationProps {
	count: number
	pageSize: number
	currentPage: number
}

export const Pagination: FC<PaginationProps> = ({ count, pageSize, currentPage }) => {
	const { i18n, t } = useTranslation()
	const [searchParams, setSearchParams] = useSearchParams()

	const pageCount = Math.ceil(count / pageSize)

	const nextPage = () => {
		const next = currentPage === pageCount ? currentPage : currentPage + 1
		searchParams.set('page', next.toString())
		setSearchParams(searchParams)
	}

	const previousPage = () => {
		const previous = currentPage === 1 ? currentPage : currentPage - 1

		searchParams.set('page', previous.toString())
		setSearchParams(searchParams)
	}

	if (pageCount <= 1) return null

	return (
		<div className={style.pagination}>
			{i18n.language === 'ru' ? (
				<p className={style.info}>
					Показаны результаты с <span>{(currentPage - 1) * pageSize + 1}</span> по{' '}
					<span>{currentPage === pageCount ? count : currentPage * pageSize}</span> из{' '}
					<span>{count}</span>
				</p>
			) : (
				<p className={style.info}>
					Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{' '}
					<span>{currentPage === pageCount ? count : currentPage * pageSize}</span> of{' '}
					<span>{count}</span> results
				</p>
			)}

			<div className={style.buttons}>
				<Button variant='empty' onClick={previousPage} disabled={currentPage === 1}>
					<HiChevronLeft /> {t('pagination.prev-button')}
				</Button>
				<Button variant='empty' onClick={nextPage} disabled={currentPage === pageCount}>
					{t('pagination.next-button')} <HiChevronRight />
				</Button>
			</div>
		</div>
	)
}
