import { Link } from 'expo-router'
import { useEffect } from 'react'
import { Button } from 'react-native-paper'
import Toast from 'react-native-toast-message'

import { AuthFields } from '~/features/auth/components/auth-fields'
import { AuthSub } from '~/features/auth/components/auth-sub'
import { AuthSubmit } from '~/features/auth/components/auth-submit'
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
      <AuthSubmit isLoading={isLoading} callback={login}>
        Login
      </AuthSubmit>
      <AuthSub textCaption="Not a member?">
        <Link asChild href="/sign-up">
          <Button>Registration</Button>
        </Link>
      </AuthSub>
    </AuthFields>
  )
}
