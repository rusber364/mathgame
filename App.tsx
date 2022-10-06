import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useFlipper } from '@react-navigation/devtools'

import { Navigator } from './app/Navigator'
import { TaskListProvider } from './app/context/useContextListTask'

export default function App() {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <TaskListProvider>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </TaskListProvider>
  )
}
