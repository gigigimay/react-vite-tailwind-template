import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('should render successfully', () => {
    render(<App />)
    expect(screen.getByText('bello!')).toBeInTheDocument()
  })
})
