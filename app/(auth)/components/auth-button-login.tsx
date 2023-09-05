import { useAuthFieldContext } from 'context/auth-context'
import { Button } from 'react-native-paper'

import { useSupabaseCallbacks } from '~/features/auth/hooks/use-supabase-callbacks'

export default function AuthButtonLogin() {
  const { email, password } = useAuthFieldContext()
  const { isLoading, login } = useSupabaseCallbacks()

  const handleLogin = () => login(email, password)

  return (
    <Button mode="contained" loading={isLoading} onPress={handleLogin}>
      Login
    </Button>
  )
}
