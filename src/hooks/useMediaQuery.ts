import { useEffect, useCallback, useState } from 'react'
import { isClient } from '../utils'

const matchQuery = (q: string) => window.matchMedia(q)

const useMediaQuery = (
  query: string
): boolean => {
  const supportMedia = isClient() && typeof window.matchMedia !== 'undefined'

  const [state, setState] = useState(() => {
    if (!supportMedia) return false
    return matchQuery(query).matches
  })

  useEffect(() => {
    const update = () => setState(matchQuery(query).matches)

    if (!supportMedia) return

    const currentQuery = matchQuery(query)
    update()

    currentQuery.addListener(update)

    return () => {
      currentQuery.removeListener(update)
    }
  }, [supportMedia, query])

  return state
}

export { useMediaQuery }
