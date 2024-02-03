import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import Home from './Home'

test('Loads the Homepage component', async () => {
  render(<Home />)

  expect(screen.getByText('Hello world!')).toBeInTheDocument()
})