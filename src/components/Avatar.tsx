import * as React from 'react'
import styled from 'styled-components'

const defaultProps = {
  className: '' as string,
  isSquare: false as boolean,
  src: '' as string,
  text: '' as string
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = {
  src?: string;
  text?: string;
  className?: string;
} & Partial<DefaultProps>

const AvatarContainer = styled.span<Props>`
  width: 3.75rem;
  height: 3.75rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }): string => theme.colors.accent2};
  border-radius: ${({ isSquare }): string => isSquare ? '2px' : '50%'};
  vertical-align: top;
  background-color: ${({ theme }): string => theme.colors.background};
  margin: 0;

  &:first-child {
    margin: 0;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: ${({ isSquare }): string => isSquare ? '2px' : '50%'};
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 1em;
    text-align: center;
    transform: translate(-50%, -50%) scale(0.65);
    white-space: nowrap;
    user-select: none;
  }
`

const Avatar: React.FC<Props> = ({
  src,
  text,
  isSquare,
  className,
  ...props
}: Props) => {
  return (
    <AvatarContainer className={className} isSquare={isSquare}>
      {src && <img src={src} {...props} />}
      {!src && (
        <span {...props}>
          {text}
        </span>
      )}
    </AvatarContainer>
  )
}

Avatar.defaultProps = defaultProps

export { Avatar }
