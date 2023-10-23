import { Navigate, RouteProps } from 'react-router-dom'
import { DashboardPage } from 'pages/dashboard'
import { BookingsPage } from 'pages/bookings'
import { BookingPage } from 'pages/booking'
import { CabinsPage } from 'pages/cabins'
import { UsersPage } from 'pages/users'
import { SettingsPage } from 'pages/settings'
import { AccountPage } from 'pages/account'
import { LoginPage } from 'pages/login'
import { RegisterPage } from 'pages/register'
import { AppRoutes } from '../lib/constants/app-routes'
import { AppRoutesWithoutLayout } from '../lib/constants/app-routes-without-layout'

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.DASHBOARD]: '/dashboard',
  [AppRoutes.BOOKINGS]: '/bookings',
  [AppRoutes.BOOKING]: '/bookings/:id',
  [AppRoutes.CABINS]: '/cabins',
  [AppRoutes.USERS]: '/users',
  [AppRoutes.SETTINGS]: '/settings',
  [AppRoutes.ACCOUNT]: '/account'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    index: true,
    path: RoutePath.main,
    element: <Navigate replace to={RoutePath.dashboard} />
  },
  [AppRoutes.DASHBOARD]: {
    path: RoutePath.dashboard,
    element: <DashboardPage />
  },
  [AppRoutes.BOOKINGS]: {
    path: RoutePath.bookings,
    element: <BookingsPage />
  },
  [AppRoutes.BOOKING]: {
    path: RoutePath.booking,
    element: <BookingPage />
  },
  [AppRoutes.CABINS]: {
    path: RoutePath.cabins,
    element: <CabinsPage />
  },
  [AppRoutes.USERS]: {
    path: RoutePath.users,
    element: <UsersPage />
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.settings,
    element: <SettingsPage />
  },
  [AppRoutes.ACCOUNT]: {
    path: RoutePath.account,
    element: <AccountPage />
  }
}

export const RoutePathWithoutLayout: Record<AppRoutesWithoutLayout, string> = {
  [AppRoutesWithoutLayout.LOGIN]: '/login',
  [AppRoutesWithoutLayout.REGISTER]: '/register',
  [AppRoutesWithoutLayout.NOT_FOUND]: '*'
}

export const RouteConfigWithoutLayout: Record<AppRoutesWithoutLayout, RouteProps> = {
  [AppRoutesWithoutLayout.LOGIN]: {
    path: RoutePathWithoutLayout.login,
    element: <LoginPage />
  },
  [AppRoutesWithoutLayout.REGISTER]: {
    path: RoutePathWithoutLayout.register,
    element: <RegisterPage />
  },
  [AppRoutesWithoutLayout.NOT_FOUND]: {
    path: RoutePathWithoutLayout.not_found,
    element: <Navigate replace to={RoutePath.dashboard} />
  }
}
