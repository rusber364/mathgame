import { Stack } from 'expo-router'
import { I18nextProvider } from 'react-i18next'
import { StyleSheet } from 'react-native'
import ToastMessage from 'react-native-toast-message'
import { Provider } from 'react-redux'

import { AuthProvider } from '~/features/auth/context/auth.context'
import i18n from '~/langs/translation'
import { store } from '~/store/redux'

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <Stack screenOptions={{ contentStyle: styles.stack }}>
              <Stack.Screen name="(main)/index" options={{ headerShown: false }} />
            </Stack>
          </AuthProvider>
        </I18nextProvider>
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
