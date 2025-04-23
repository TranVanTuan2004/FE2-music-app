import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login.tsx'
import { ToastContainer } from 'react-toastify'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Layout from './layout/AdminLayout/Layout.tsx'
import AuthMiddleware from './middleware/AuthMiddleware.tsx'
import NoAuthMiddleware from './middleware/NoAuthMiddleware.tsx'
import User from './pages/admin/user/User.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './pages/admin/Dashboard.tsx'
import adminRoute from './routes/adminRoute.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  // Auth
  {
    path: "/login",
    element: <NoAuthMiddleware>
      <Login />
    </NoAuthMiddleware>
  },
  //Client
  {

  },

  // Admin
  {
    path: '/admin',
    element: (<AuthMiddleware>
      <Layout />
    </AuthMiddleware>),
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      // ... bung tất cả các phần tử mà thằng map return về (spread operator) vào mảng children
      ...adminRoute.map((route) => ({
        path: route.path,
        element: route.element
      }))
    ]
  },

])
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  </Provider>

)
