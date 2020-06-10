import * as React from 'react'
import styled, { css, CSSProp } from 'styled-components'
import { warn } from '../utils'
import { Maybe } from '../utils/typeUtils'

function width (size: Maybe<number> | number): CSSProp | undefined {
  if (typeof size !== 'number') return

  const width = (size / 12) * 100
  return css`
    flex-basis: ${width.toFixed(8)}%;
  `
}

type RowProps = {
  align?: string;
  justify?: string;
}

type ColProps = {
  xs: number;
  sm?: Maybe<number>;
  md?: Maybe<number>;
  lg?: Maybe<number>;
  xl?: Maybe<number>;
}

type GridProps = RowProps & ColProps & {
  container: boolean;
  item: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0.5rem;
  align-items: ${props => props.align || 'normal'};
  justify-content: ${props => props.justify || 'normal'};
`

const Col = styled.div<ColProps>`
  padding: 0.5rem 0.5rem;
  ${({ xs }) => width(xs)};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ sm }) => sm && width(sm)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ md }) => md && width(md)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ lg }) => lg && width(lg)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ xl }) => xl && width(xl)};
  }
`

const Grid: React.FC<GridProps> = ({ container, item, sm, md, lg, align, justify, ...rest }) => {
  if (container && item) {
    warn('Using container and item on the same component is not supported')
    return null
  } else if (container) {
    return <Row align={align} justify={justify} {...rest} />
  } else if (item) {
    return <Col sm={sm} md={md} lg={lg} {...rest} />
  }
  return null
}

export { Grid }
