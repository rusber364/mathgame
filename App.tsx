import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useFlipper } from '@react-navigation/devtools'
import { Navigator } from './app/Navigator'
import { GameProvider } from './app/features/game/context/GameProvider'
import './app/langs/translation'

export default function App() {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <GameProvider>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </GameProvider>
  )
}
