import '~/langs/translation'

import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import ToastMessage from 'react-native-toast-message'
import { Provider } from 'react-redux'

import { AuthProvider } from '~/features/auth/context/auth.context'
import { store } from '~/store/redux'

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Stack screenOptions={{ contentStyle: styles.stack }}>
            <Stack.Screen name="(main)/index" options={{ headerShown: false }} />
          </Stack>
        </AuthProvider>
      </Provider>
      <ToastMessage />
    </>
  )
}

const styles = StyleSheet.create({
  stack: {
    justifyContent: 'center',
  },
})
