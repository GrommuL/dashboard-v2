import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './providers/app-router'
import { ThemeProvider } from './providers/theme-provider'
import { ErrorBoundary } from './providers/error-boundary'
import './styles/global.scss'
import '../shared/config/i18n-config'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<AppRouter />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</React.StrictMode>
)
