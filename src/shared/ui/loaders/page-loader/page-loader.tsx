import style from './page-loader.module.scss'

export const PageLoader = () => {
	return (
		<div className={style.container}>
			<span className={style.loader}></span>
		</div>
	)
}
