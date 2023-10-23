import style from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={style.container}>
      <span className={style.loader}></span>
    </div>
  )
}
