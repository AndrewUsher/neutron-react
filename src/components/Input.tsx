import * as React from 'react'
import { lighten, rgba } from 'polished'
import styled from 'styled-components'
import Tooltip from './Tooltip'

interface InputProps {
  hasError?: boolean;
  hasIcon?: boolean;
  tooltip?: string;
}

interface IconProps {
  position?: string;
}

const InputWrapper = styled.label<InputProps>`
  display: block;
  position: relative;
`

const Icon = styled.div<IconProps>`
  position: absolute;
  top: 0.75rem;
  ${(props) =>
    props.position === 'right'
      ? `
    right: 1rem;
  `
      : `
    left: 1rem;
  `}
`

const StyledInput = styled.input<InputProps>`
    appearance: none;
  display: flex;
  width: 100%;
  border: 1px ${(props) => props.theme.colors.accent4} solid;
  color: ${(props) => props.theme.colors.dark};
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 0.625rem 1rem;
  font-size: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  &:disabled {
    background-color: ${(props) => rgba(props.theme.colors.accent4, 0.2)};
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    border: 1px ${(props) => props.theme.colors.primary} solid;
    box-shadow: 0 0.125rem 0.5rem ${rgba('#202C4B', 0.08)};
  }
  &::placeholder {
    color: ${(props) => lighten(0.25, props.theme.colors.dark)};
  }
  ${(props) =>
    props.hasError &&
    `
    border: 1px ${props.theme.colors.error} solid;
  `}
  position: relative;
  ${(props) =>
    props.hasIcon &&
    `
    padding-left: 3rem;
  `}
`

const TooltipIcon = () => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16A8 8 0 108 0a8 8 0 000 16z" fill="#CFD7DF" />
    <path
      d="M6.06 6a2 2 0 013.89.67c0 1.33-2 2-2 2M8 11.33h0"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AlertIcon = () => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M0 8a8 8 0 1116 0A8 8 0 010 8z" fill="#F27474" />
      <path d="M8 4v4M8 11.7h0" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 8a8 8 0 1116 0A8 8 0 010 8z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
)

interface ComponentProps {
  error?: boolean;
  IconComponent?: any;
  tooltip?: string;
}

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-family: 'Open Sans';
  margin-top: ${props => props.theme.spacing(1)};
`

const Input = (props: ComponentProps) => {
  const { error, IconComponent, tooltip, ...rest } = props
  return (
    <>
      <InputWrapper hasError={error}>
        <StyledInput hasError={error} hasIcon={!!IconComponent} {...rest} />
        {!!tooltip && (
          <Icon position="right">
            <Tooltip.Trigger>
              <TooltipIcon />
              <Tooltip.Message>{tooltip}</Tooltip.Message>
            </Tooltip.Trigger>
          </Icon>
        )}
        {!!IconComponent && (
          <Icon>
            <IconComponent />
          </Icon>
        )}
        {!!error && (
          <Icon position="right">
            <AlertIcon />
          </Icon>
        )}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}

export { Input }
