import { BiSun } from 'react-icons/bi'
import { BsMoonStars } from 'react-icons/bs'
import { Switch } from 'shared/ui/inputs'
import { useTheme, ThemeVariants } from 'shared/config/theme-config'
import style from './theme-toggler.module.scss'

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={style.toggler}>
      <div className={style.info}>
        {theme === ThemeVariants.DARK ? <BiSun size={24} /> : <BsMoonStars size={20} />}
        <span>{theme === ThemeVariants.DARK ? 'Cветлая' : 'Темная'} тема</span>
      </div>
      <Switch
        id='themeToggler'
        onChange={toggleTheme}
        defaultChecked={theme === ThemeVariants.DARK}
      />
    </div>
  )
}
