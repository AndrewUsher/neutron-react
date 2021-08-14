import { useRef, useEffect, useState, useCallback } from 'react'

type WaitElements = Record<string, string>;

type WaitElementsResult = Record<string, boolean>;

const defaultObserverConfig = { childList: true, subtree: true }

type Options = {
  elements: WaitElements,
  observerOptions: MutationObserverInit
  observerNode: Node
}

function useWaitForElements ({
  elements,
  observerOptions = defaultObserverConfig,
  observerNode = document.body
}: Options): WaitElementsResult {
  const [result, setResult] = useState({})
  const mutationObserver = useRef<MutationObserver | null>(null)

  const localElements = JSON.stringify(elements)
  const localObserverOptions = JSON.stringify(observerOptions)

  const stopObserver = () => {
    if (mutationObserver.current !== null) {
      mutationObserver.current.disconnect()
      mutationObserver.current = null
    }
  }

  const refreshResult = useCallback(() => {
    let updatedResult = {}
    let hasMissingElements = false

    for (const [element, selector] of Object.entries(JSON.parse(localElements) as WaitElements)) {
      const isPresent = !!document.querySelector(selector)
      if (!isPresent) { hasMissingElements = true }

      updatedResult = { ...updatedResult, [element]: isPresent }
    }

    if (!hasMissingElements) stopObserver()

    setResult(updatedResult)
  }, [localElements])

  useEffect(() => {
    if (mutationObserver.current === null && Object.keys(JSON.parse(localElements)).length >= 1) {
      const observerCallback = (entries: MutationRecord[]) => {
        for (const entry of entries) {
          if (entry.addedNodes.length >= 1) { refreshResult() }
        }
      }

      mutationObserver.current = new MutationObserver(observerCallback)
      mutationObserver.current.observe(observerNode, JSON.parse(localObserverOptions))
    }
  }, [localElements, localObserverOptions, refreshResult, observerNode])

  useEffect(() => {
    refreshResult()

    return () => {
      stopObserver()
    }
  }, [refreshResult])

  return result
}

export default useWaitForElements
