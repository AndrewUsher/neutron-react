import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

const StyledTypography = styled.div`
  font-family: ${props => props.theme.fonts.main};
  ${props => props.gutterBottom && `
    margin-bottom: 0.25em;
  `}
  ${variant({
    variants: {
      h1: {
        fontSize: '6rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em'
      },
      h2: {
        fontSize: '4rem',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 'bold'
      },
      h4: {
        fontSize: '2.5rem',
        fontWeight: 'bold'
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 'bold'
      },
      p: {
        fontSize: '1rem'
      }
    }
  })}
`

const Typography = ({ children, gutterBottom, variant, ...props }) => {
  return (
    <StyledTypography gutterBottom={gutterBottom} variant={variant} as={variant} {...props}>
      {children}
    </StyledTypography>
  )
}

Typography.defaultProps = {
  gutterBottom: true
}

export { Typography }
