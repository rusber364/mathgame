import 'react-native-url-polyfill/auto'
import ToastMessage from 'react-native-toast-message'
import { StrictMode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Navigator } from './app/Navigator'
import { GameProvider } from './app/features/game/context/GameProvider'
import { AuthProvider } from './app/features/auth/context/AuthProvider'
import './app/langs/translation'

export default function App() {
  return (
    <StrictMode>
      <SafeAreaProvider>
        <AuthProvider>
          <GameProvider>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
          </GameProvider>
        </AuthProvider>
      </SafeAreaProvider>
      <ToastMessage />
    </StrictMode>
  )
}
