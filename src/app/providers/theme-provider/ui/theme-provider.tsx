import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeVariants } from 'features/theme'
import { FC, ReactNode, useMemo, useState } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const themeFromLocalStorage =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeVariants) || ThemeVariants.DARK
  const [theme, setTheme] = useState<ThemeVariants>(themeFromLocalStorage)

  const defaultThemeProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultThemeProps}>{children}</ThemeContext.Provider>
}
