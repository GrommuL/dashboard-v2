import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import style from './pagination.module.scss'
import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'shared/ui/buttons/button'

interface PaginationProps {
	count: number
	pageSize: number
	currentPage: number
}

export const Pagination: FC<PaginationProps> = ({ count, pageSize, currentPage }) => {
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
			<p className={style.info}>
				Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{' '}
				<span>{currentPage === pageCount ? count : currentPage * pageSize}</span> of{' '}
				<span>{count}</span> results
			</p>
			<div className={style.buttons}>
				<Button variant='empty' onClick={previousPage} disabled={currentPage === 1}>
					<HiChevronLeft /> Previous
				</Button>
				<Button variant='empty' onClick={nextPage} disabled={currentPage === pageCount}>
					Next <HiChevronRight />
				</Button>
			</div>
		</div>
	)
}
