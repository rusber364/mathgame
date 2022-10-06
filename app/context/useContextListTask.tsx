import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { useCreateTasks, TaskList } from '../hooks/useCreateTasks'

type TTaskList = {
  checkedValues: Record<string, number>
  setCheckedValues: React.Dispatch<React.SetStateAction<Record<string, number>>>
  tasks: TaskList
}

const TaskListProviderContext = createContext<TTaskList | null>(null)

export function useTaskListContext() {
  const context = useContext(TaskListProviderContext)
  if (!context) {
    throw new Error('useTaskListContext must be used within a TaskListProvider')
  }
  return context
}

export function TaskListProvider({ children }: PropsWithChildren) {
  const tasks = useCreateTasks(5)
  const [checkedValues, setCheckedValues] = useState<Record<string, number>>({})

  return (
    <TaskListProviderContext.Provider value={{ tasks, checkedValues, setCheckedValues }}>
      {children}
    </TaskListProviderContext.Provider>
  )
}
