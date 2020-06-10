import * as React from 'react'
import { render } from '@testing-library/react'
import { Avatar, ThemeProvider } from '../../'

describe('Avatar', () => {
  test('renders image', () => {
    const { debug } = render(
      <ThemeProvider>
        <Avatar src="http://placekitten.com/200/300" />
      </ThemeProvider>
    )
    debug()
  })
})
