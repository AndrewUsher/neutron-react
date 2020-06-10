import * as React from 'react'

type Return = {
  isFocused: boolean;
  bindings: {
    onFocus: () => void;
    onBlur: () => void;
  };
}

const useFocus = (
  statusHandler?: (status: boolean) => void
): Return => {
  const [isFocused, setFocused] = React.useState(false)

  const bindings = {
    onFocus: (): void => {
      statusHandler ? statusHandler(true) : setFocused(true)
    },
    onBlur: (): void => {
      statusHandler ? statusHandler(false) : setFocused(false)
    }
  }

  return { isFocused, bindings }
}

export { useFocus }
