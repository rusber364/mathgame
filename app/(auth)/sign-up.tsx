import { useEffect } from 'react'
import Toast from 'react-native-toast-message'

import AuthButton from '~/features/auth/components/auth-button'
import { AuthFields } from '~/features/auth/components/auth-fields'
import AuthSubButton from '~/features/auth/components/auth-sub-button'
import { useRegistrationMutation } from '~/features/auth/store/auth.slice'
import { getErrorMessage } from '~/utils/get-error-message'

export default function SingUpScreen() {
  const [registration, { isLoading, error: errorRegistration, isError }] = useRegistrationMutation()

  useEffect(() => {
    if (!isError) {
      Toast.show({
        type: 'info',
        text1: 'confirm your email',
        text2: `send to email`,
      })
    } else {
      Toast.show({ type: 'error', ...getErrorMessage(errorRegistration) })
    }
  }, [errorRegistration, isError])

  return (
    <AuthFields title="Registration">
      <AuthButton isLoading={isLoading} callback={registration}>
        Registration
      </AuthButton>
      <AuthSubButton label="Login" textCaption="Already have an account?" href="/sign-in"></AuthSubButton>
    </AuthFields>
  )
}
