import { render, RenderOptions } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes } from '@/main/routes';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

const renderRouter = (path = '/', options?: Omit<RenderOptions, 'wrapper'>) => (
  render(
    <RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />,
    { wrapper: AllTheProviders, ...options }
  )
)

export { renderRouter }
