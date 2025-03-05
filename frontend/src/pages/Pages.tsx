import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import WelcomePage from './WelcomePage/Welcome.page'
import DashboardPage from './DashboardPage/DashboardPage'

const Pages = () => {
  const LoginPage = lazy(() => import('./LoginPage/LoginPage'))
  const RegistrationPage = lazy(
    () => import('./RegistrationPage/RegistrationPage')
  )
  const DashboardPage = lazy(() => import('./DashboardPage/DashboardPage'))

  return (
    <Routes>
      <Route path="/" index element={<WelcomePage />} />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/registration"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RegistrationPage />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default Pages
