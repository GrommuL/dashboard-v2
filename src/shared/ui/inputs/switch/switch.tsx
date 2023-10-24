import { FC, InputHTMLAttributes } from 'react'
import style from './switch.module.scss'

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export const Switch: FC<SwitchProps> = ({ id, ...otherProps }) => {
  return (
    <div className={style.switch}>
      <label className={style.label} htmlFor={id} />
      <input className={style.checkbox} {...otherProps} id={id} type='checkbox' />
    </div>
  )
}
