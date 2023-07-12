import { useRef } from 'react'
import { generationTask } from '../core/generationTask'

export function useGenerationTask() {
  const templateTask = useRef('')
  const currentTask = useRef(generationTask(templateTask.current))

  const resetTask = () => {
    currentTask.current = generationTask(templateTask.current)
  }

  const resetTemplate = () => {
    templateTask.current = ''
  }

  const registerTemplate = (template: string) => {
    templateTask.current = template
    currentTask.current = generationTask(templateTask.current)
  }

  return {
    currentTask: currentTask.current,
    resetTask,
    template: { reset: resetTemplate, register: registerTemplate },
  }
}
