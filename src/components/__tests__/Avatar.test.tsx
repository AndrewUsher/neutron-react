import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Avatar, ThemeProvider } from '../../'

describe('Avatar', () => {
  test('renders image', () => {
    render(
      <ThemeProvider>
        <Avatar src="http://placekitten.com/200/300" alt="test" />
      </ThemeProvider>
    )
    expect(screen.getByAltText('test')).toBeInTheDocument()
  })

  test('render text if src is not defined', () => {
    render(
      <ThemeProvider>
        <Avatar text="AU" />
      </ThemeProvider>
    )
    expect(screen.getByText('AU')).toBeInTheDocument()
  })
})
