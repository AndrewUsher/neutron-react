import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Avatar, ThemeProvider } from '../../'

describe('Avatar', () => {
  test('renders image', () => {
    const { getByAltText } = render(
      <ThemeProvider>
        <Avatar src="http://placekitten.com/200/300" alt="test" />
      </ThemeProvider>
    )
    expect(getByAltText('test')).toBeInTheDocument()
  })
})
