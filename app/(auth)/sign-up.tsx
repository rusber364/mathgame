import { Link } from 'expo-router'
import { useEffect } from 'react'
import { Button } from 'react-native-paper'
import Toast from 'react-native-toast-message'

import { AuthFields } from '~/features/auth/components/auth-fields'
import { AuthSub } from '~/features/auth/components/auth-sub'
import { AuthSubmit } from '~/features/auth/components/auth-submit'
import { useRegistrationMutation } from '~/features/auth/store/auth.slice'
import { getErrorMessage } from '~/utils/get-error-message'

export default function SingUpScreen() {
  const [registration, { isLoading, error: errorRegistration, isError, isSuccess }] = useRegistrationMutation()

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'info',
        text1: 'confirm your email',
        text2: `send to email`,
      })
    }
  }, [errorRegistration, isSuccess])

  useEffect(() => {
    if (isError) {
      Toast.show({ type: 'error', ...getErrorMessage(errorRegistration) })
    }
  }, [errorRegistration, isError])

  return (
    <AuthFields title="Registration">
      <AuthSubmit isLoading={isLoading} callback={registration}>
        Registration
      </AuthSubmit>
      <AuthSub textCaption="Already have an account?">
        <Link asChild href="/sign-in">
          <Button>Login</Button>
        </Link>
      </AuthSub>
    </AuthFields>
  )
}
