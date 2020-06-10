import { useEffect } from 'react'

const useEffectOnce = (effect: () => void): void => {
  useEffect(effect, [])
}

export { useEffectOnce }
