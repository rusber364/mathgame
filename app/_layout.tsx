import { Stack } from 'expo-router'
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
          <Stack />
        </AuthProvider>
      </Provider>
      <ToastMessage />
    </>
  )
}
