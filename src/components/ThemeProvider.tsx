import * as React from 'react'
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components'

// @ts-ignore
const breakpoints: any = ['0px', '600px', '960px', '1280px', '1920px']

breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

const theme: DefaultTheme = {
  breakpoints,
  colors: {
    accent1: '#FAFAFA',
    accent2: '#EAEAEA',
    accent3: '#999999',
    accent4: '#888888',
    accent5: '#666666',
    accent6: '#444444',
    accent7: '#333333',
    accent8: '#111111',
    primary: '#2D4EF5',
    success: '#4CE2A7',
    alert: '#F1A153',
    error: '#E24C4C',
    dark: '#022047'
  },
  fonts: {
    main: 'Open Sans'
  },
  spacing: (i: number) => `${i * 8}px`
}

const ThemeProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    {children}
  </StyledThemeProvider>
)

export { theme, ThemeProvider }
