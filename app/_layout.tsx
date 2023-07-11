import { Stack } from 'expo-router'
import ToastMessage from 'react-native-toast-message'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { GameProvider } from '~/features/game/context/GameProvider'
import { AuthProvider } from '~/features/auth/context/AuthProvider'
import '~/langs/translation'

export default function Layout() {
  return (
    <>
      <SafeAreaProvider>
        <AuthProvider>
          <GameProvider>
            <Stack initialRouteName="home" />
          </GameProvider>
        </AuthProvider>
      </SafeAreaProvider>
      <ToastMessage />
    </>
  )
}
