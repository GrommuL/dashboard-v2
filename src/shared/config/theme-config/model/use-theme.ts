import { useContext, useState, Dispatch } from 'react'
import { ThemeContext } from './theme-context'
import { LOCAL_STORAGE_THEME_KEY, ThemeVariants } from '../lib/theme'

interface UseThemeResult {
	toggleTheme: () => void
	theme: ThemeVariants
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const selectedTheme =
			theme === ThemeVariants.DARK ? ThemeVariants.LIGHT : ThemeVariants.DARK
		setTheme(selectedTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme)
	}

	return {
		theme,
		toggleTheme
	}
}
