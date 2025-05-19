import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login.tsx'
import { ToastContainer } from 'react-toastify'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import AuthMiddleware from './middleware/AuthMiddleware.tsx'
import NoAuthMiddleware from './middleware/NoAuthMiddleware.tsx'

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
import AdminLayout from './layout/AdminLayout/AdminLayout.tsx'
import ClientLayout from './layout/ClientLayout/ClientLayout.tsx'
import Home from './pages/client/home/Home.tsx'
import Detail from './pages/client/detail/Detail.tsx'
import Favorite from './pages/client/favorite/Favorite.tsx'
import RoleProtectedRoute from './middleware/RoleProtectedRoute.tsx'

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
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: `/track/:id`,
        element: <Detail />
      },
      {
        path: '/favorite',
        element: <Favorite />
      },
    ]
  },

  // Admin
  {
    path: '/admin',
    element: (<AuthMiddleware>
      <RoleProtectedRoute allowedRoles={['admin']}>
        <AdminLayout />
      </RoleProtectedRoute>
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
