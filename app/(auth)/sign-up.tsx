import { AuthFields } from '~/features/auth/components/auth-fields'

import AuthButtonRegistration from './components/auth-button-registration'
import AuthSubButton from './components/auth-sub-button'

export default function SingIndScreen() {
  return (
    <AuthFields title="Registration">
      <AuthButtonRegistration />
      <AuthSubButton label="Login" textCaption="Already have an account?" href="/sign-in"></AuthSubButton>
    </AuthFields>
  )
}
