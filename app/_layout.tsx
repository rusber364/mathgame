import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import ToastMessage from 'react-native-toast-message'
import { Provider } from 'react-redux'

import { store } from '~/store/redux'
import { AuthProvider } from '~/features/auth/context/auth.context'
import '~/langs/translation'

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Stack screenOptions={{ contentStyle: styles.stack }} />
        </AuthProvider>
      </Provider>
      <ToastMessage />
    </>
  )
}

const styles = StyleSheet.create({
  stack: {
    justifyContent: 'center',
    padding: 10,
  },
})
