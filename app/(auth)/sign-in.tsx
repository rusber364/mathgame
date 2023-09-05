import { AuthFields } from 'context/auth-context'

import AuthButtonLogin from './components/auth-button-login'
import AuthSubButton from './components/auth-sub-button'

export default function SingIndScreen() {
  return (
    <AuthFields title="login">
      <AuthButtonLogin />
      <AuthSubButton label="Registration" textCaption="Not a memeber?" href="/sign-up"></AuthSubButton>
    </AuthFields>
  )
}
