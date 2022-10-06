import { useEffect, useState } from 'react'
import { generationTask } from '../core/generationTask'

export type TaskList = ReturnType<typeof generationTask>[]

export function useCreateTasks(tasks = 10) {
  const [taskList, setTaskList] = useState<TaskList>([])

  useEffect(() => {
    const _taskList: TaskList = []

    for (let _ of Array(tasks).keys()) {
      const task = generationTask()
      _taskList.push(task)
    }

    setTaskList(_taskList)
  }, [])

  return taskList
}
