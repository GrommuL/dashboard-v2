import { createContext } from 'react'
import { ThemeVariants } from '../lib/theme'

interface ThemeContextProps {
	theme?: ThemeVariants
	setTheme?: (theme: ThemeVariants) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
