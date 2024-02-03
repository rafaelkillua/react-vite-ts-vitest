import { Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/Home/Home').then(({ default: Component }) => ({ Component })),
      },
      {
        path: '*',
        element: <Navigate to='/' replace={true} />,
      },
    ]
  }
]

export { routes }
