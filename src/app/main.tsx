import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './providers/app-router'
import { ThemeProvider } from './providers/theme-provider'
import './styles/global.scss'
import '../shared/config/i18n-config'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AppRouter />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
