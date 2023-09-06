import { Button } from 'react-native-paper'

import { useAuthFieldsContext } from '~/features/auth/components/auth-fields'
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
