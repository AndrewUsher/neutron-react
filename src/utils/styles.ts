import styled, { css } from 'styled-components'
import rgba from 'polished/lib/color/rgba'
import hideVisually from 'polished/lib/mixins/hideVisually'

interface SelectableProps {
  checked?: boolean;
}

export interface ComponentProps {
  id?: string;
  checked?: boolean;
  onChange?: any;
  [x: string]: unknown;
}

const HiddenSelectableAppearance = css`
  ${hideVisually()};
`

const SelectableAppearance = css<SelectableProps>`
  width: 1.25rem;
  height: 1.25rem;
  border: 1px ${(props) => props.theme.colors.accent4} solid;
  background-color: #fff;
  transition: background-color 0.1s ease-out;
  box-shadow: 0 0.125rem 0.25rem ${rgba('#000', 0.04)};
  cursor: pointer;
  ${(props) =>
    props.checked &&
    css`
    background-color: ${props.theme.colors.primary};
    background-image: url(data:image/svg+xml;base64,CiAgPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTMuMyA0TDYgMTEuMyAyLjcgOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDwvc3ZnPgo=);
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px ${props.theme.colors.white} solid;
  `}
`

const ControlContainer = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label`
  margin: 0.125rem 8px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
`

export { ControlContainer, HiddenSelectableAppearance, SelectableAppearance, Label }
