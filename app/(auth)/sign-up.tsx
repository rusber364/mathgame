import AuthButton from '~/features/auth/components/auth-button'
import { AuthFields } from '~/features/auth/components/auth-fields'
import AuthSubButton from '~/features/auth/components/auth-sub-button'

export default function SingIndScreen() {
  return (
    <AuthFields title="Registration">
      <AuthButton type="registration">Registration</AuthButton>
      <AuthSubButton label="Login" textCaption="Already have an account?" href="/sign-in"></AuthSubButton>
    </AuthFields>
  )
}
