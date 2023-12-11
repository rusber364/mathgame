import { Button } from 'react-native-paper'

import { useAuthFieldsContext } from '~/features/auth/context/auth-fields.context'
import { useSupabaseCallbacks } from '~/features/auth/hooks/use-supabase-callbacks'

type Props = {
  type: 'registration' | 'login'
}

export default function AuthButton({ type, children }: React.PropsWithChildren<Props>) {
  const { email, password } = useAuthFieldsContext()
  const { isLoading, ...callbacks } = useSupabaseCallbacks()

  const handleCallbacks = () => callbacks[type](email, password)

  return (
    <Button loading={isLoading} mode="contained" onPress={handleCallbacks}>
      {children}
    </Button>
  )
}
