import { Button } from 'react-native-paper'

import { useAuthFieldsContext } from '~/features/auth/context/auth-fields.context'
import { useSupabaseCallbacks } from '~/features/auth/hooks/use-supabase-callbacks'

export default function AuthButtonRegistration() {
  const { email, password } = useAuthFieldsContext()
  const { isLoading, registration } = useSupabaseCallbacks()

  const handleRegistration = () => registration(email, password)

  return (
    <Button loading={isLoading} mode="contained" onPress={handleRegistration}>
      Registration
    </Button>
  )
}
