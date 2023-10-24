import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from 'app/layout'
import { RouteConfig, RouteConfigWithoutLayout } from 'shared/config/route-config'
import { PageLoader } from 'shared/ui/loaders'
import { useTheme } from 'shared/config/theme-config'

export const AppRouter = () => {
  const { theme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route element={<AppLayout />}>
          {Object.values(RouteConfig).map(({ element, path, index }) => (
            <Route
              index={index}
              path={path}
              element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
              key={path}
            />
          ))}
        </Route>
        {Object.values(RouteConfigWithoutLayout).map(({ element, path }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </div>
  )
}
