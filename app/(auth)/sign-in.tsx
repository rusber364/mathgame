import AuthButtonLogin from '~/features/auth/components/auth-button-login'
import { AuthFields } from '~/features/auth/components/auth-fields'
import AuthSubButton from '~/features/auth/components/auth-sub-button'

export default function SingIndScreen() {
  return (
    <AuthFields title="login">
      <AuthButtonLogin />
      <AuthSubButton label="Registration" textCaption="Not a memeber?" href="/sign-up"></AuthSubButton>
    </AuthFields>
  )
}
