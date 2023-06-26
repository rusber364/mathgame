import { useRef } from 'react'
import { generationTask } from '../core/generationTask'

export function useGenerationTask() {
  const currentTask = useRef(generationTask())
  const resetTask = () => (currentTask.current = generationTask())

  return { currentTask: currentTask.current, resetTask }
}
