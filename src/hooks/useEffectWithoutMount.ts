import * as React from 'react'

type Effect = () => void | undefined
type Dependencies = Array<unknown> | undefined

const useEffectWithoutMount = (effect: Effect, deps: Dependencies = []): void => {
  const isInitialMount = React.useRef(true)
  React.useEffect((): void | (() => void | undefined) => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
  }, [...deps, effect]) // eslint-disable-line react-hooks/exhaustive-deps
}

export { useEffectWithoutMount }
