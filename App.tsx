import { StrictMode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './app/Navigator'
import { GameProvider } from './app/features/game/context/GameProvider'
import './app/langs/translation'

export default function App() {
  return (
    <StrictMode>
      <GameProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </GameProvider>
    </StrictMode>
  )
}
