import { useCallback, useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import { isClient } from '../utils'

type WindowSize = {
  height: number | null,
  width: number | null
}

const useWindowSize = (): WindowSize => {
  const isInBrowser = isClient()

  const getSize = useCallback(() => {
    return {
      width: isInBrowser ? window.innerWidth : null,
      height: isInBrowser ? window.innerHeight : null
    }
  }, [isInBrowser])

  const [windowSize, setWindowSize] = useState(getSize)

  const handleResize = useCallback(() => {
    setWindowSize(getSize())
  }, [getSize])

  const throttledResizeHandler = throttle(handleResize)

  useEffect(() => {
    if (!isInBrowser) return

    window.addEventListener('resize', throttledResizeHandler)
    return () => { window.removeEventListener('resize', throttledResizeHandler) }
  },
  [getSize, isInBrowser, handleResize, throttledResizeHandler]
  )

  return windowSize
}

export { useWindowSize }
