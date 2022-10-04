import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useFlipper } from '@react-navigation/devtools'
import { Navigator } from './app/Navigator'

export default function App() {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  )
}
