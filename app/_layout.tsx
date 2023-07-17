import { Stack } from 'expo-router'
import ToastMessage from 'react-native-toast-message'

import { GameProvider } from '~/features/game/context/GameProvider'
import { AuthProvider } from '~/features/auth/context/AuthProvider'
import '~/langs/translation'

export default function Layout() {
  return (
    <>
      <AuthProvider>
        <GameProvider>
          <Stack />
        </GameProvider>
      </AuthProvider>
      <ToastMessage />
    </>
  )
}
