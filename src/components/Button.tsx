import { lighten } from 'polished'
import styled, { css, DefaultTheme, BaseThemedCssFunction } from 'styled-components'

const defaultVariant = 'primary'

const defaultProps = {
  outline: false as boolean,
  rounded: false as boolean,
  variant: defaultVariant as string
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = {
  soft?: boolean;
} & Partial<DefaultProps>

const getVariantColor: BaseThemedCssFunction<DefaultTheme> = (props: Props & { theme: DefaultTheme }): string => props.theme.colors[props.variant || defaultVariant]

const Button = styled.button<Props>`
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  border: none;
  padding: 16px 24px;
  text-transform: uppercase;
  transition: background-color 200ms;
  width: 100%;

  &:hover {
    background-color: ${({ theme, variant }) => lighten(0.1, theme.colors[variant || defaultVariant])};
  }

  &:disabled {
    background-color: #D8D8D8;
    border-color: transparent;
    color: #999999;
    cursor: not-allowed;
    text-decoration: line-through;
  }

  ${props => !props.outline && css<Props>`
    background-color: ${getVariantColor};
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  `}

  ${props => props.outline && css<Props>`
    border: 2px solid ${getVariantColor};
    color: ${getVariantColor};

    &:hover {
      border-color: transparent;
      color: #fff;
    }
  `}

  ${props => props.rounded && css<Props>`
    border-radius: 24px;
  `}

  ${props => props.soft && css<Props>`
    border-radius: 4px;
  `}
`

Button.defaultProps = defaultProps

export { Button }
