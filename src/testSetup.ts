import { vi } from 'vitest'
import '@testing-library/jest-dom/vitest'

export const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const router = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return {
    ...router,
    useNavigate: vi.fn().mockReturnValue(mockNavigate),
  }
})
