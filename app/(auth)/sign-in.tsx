import { useEffect } from 'react'
import Toast from 'react-native-toast-message'

import AuthButton from '~/features/auth/components/auth-button'
import { AuthFields } from '~/features/auth/components/auth-fields'
import AuthSubButton from '~/features/auth/components/auth-sub-button'
import { useLoginMutation } from '~/features/auth/store/auth.slice'
import { getErrorMessage } from '~/utils/get-error-message'

export default function SingIndScreen() {
  const [login, { isLoading, error: errorLogin, isError }] = useLoginMutation()

  useEffect(() => {
    if (isError) {
      Toast.show({ type: 'error', ...getErrorMessage(errorLogin) })
    }
  }, [errorLogin, isError])

  return (
    <AuthFields title="login">
      <AuthButton isLoading={isLoading} callback={login}>
        Login
      </AuthButton>
      <AuthSubButton label="Registration" textCaption="Not a member?" href="/sign-up"></AuthSubButton>
    </AuthFields>
  )
}
