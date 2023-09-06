import { Button } from 'react-native-paper'

import { useAuthFieldsContext } from '~/features/auth/context/auth-fields.context'
import { useSupabaseCallbacks } from '~/features/auth/hooks/use-supabase-callbacks'

export default function AuthButtonLogin() {
  const { email, password } = useAuthFieldsContext()
  const { isLoading, login } = useSupabaseCallbacks()

  const handleLogin = () => login(email, password)

  return (
    <Button mode="contained" loading={isLoading} onPress={handleLogin}>
      Login
    </Button>
  )
}
