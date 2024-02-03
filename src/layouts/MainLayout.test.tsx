import { screen, waitFor } from '@testing-library/react'
import { expect, test } from 'vitest'

import { renderRouter } from '@/testUtils'

test('Loads the MainLayout component', async () => {
  renderRouter('/')

  await waitFor(() => {
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})