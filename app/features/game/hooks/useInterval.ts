import { useEffect, useRef } from 'react'

export function useInterval(callback: TimerHandler, ms = 1000) {
  const interval = useRef<NodeJS.Timer | number>()
  const timerHandler = useRef(callback)
  const isStart = useRef(false)

  const startInterval = () => (isStart.current = true)
  const endInterval = () => (isStart.current = false)

  useEffect(() => {
    if (isStart.current) {
      interval.current = setInterval(timerHandler.current, ms)
    }
    return () => {
      clearInterval(interval.current)
      interval.current = void 0
    }
  }, [isStart.current])

  return { interval, startInterval, endInterval }
}
