import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './providers/app-router'
import { ThemeProvider } from './providers/theme-provider'
import { ErrorBoundary } from './providers/error-boundary'
import { ReactQueryProvider } from './providers/react-query-provider'
import './styles/global.scss'
import '../shared/config/i18n-config/model/i18n-config'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<ReactQueryProvider>
			<BrowserRouter>
				<ErrorBoundary>
					<ThemeProvider>
						<AppRouter />
					</ThemeProvider>
				</ErrorBoundary>
			</BrowserRouter>
		</ReactQueryProvider>
	</React.StrictMode>
)
