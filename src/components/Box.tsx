import styled, { StyledComponent } from 'styled-components'
import { typography, TypographyProps, space, SpaceProps } from 'styled-system'

type Props = TypographyProps & SpaceProps

const Box: StyledComponent<'div', Props> = styled.div`
  ${space}
  ${typography}
`

export { Box }
