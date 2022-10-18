import { addBeforeZero } from './addBeforeZero'

export function formatTimer(time: number) {
  const seconds = (time / 1000) % 60
  const minutes = (time / 1000 - seconds) / 60
  const formatSeconds = addBeforeZero(seconds)
  const formatMinutes = addBeforeZero(minutes)

  return `${formatMinutes}:${formatSeconds}`
}
