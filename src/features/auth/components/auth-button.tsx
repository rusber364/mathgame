import { Button } from 'react-native-paper'

import { type AuthCredentials, useAuthFieldsContext } from '~/features/auth/context/auth-fields.context'

type Props = {
  isLoading: boolean
  callback: (credentials: AuthCredentials) => void
}

export default function AuthButton({ callback, children, isLoading }: React.PropsWithChildren<Props>) {
  const credentials = useAuthFieldsContext()
  const handleCallback = () => callback(credentials)

  return (
    <Button loading={isLoading} mode="contained" onPress={handleCallback}>
      {children}
    </Button>
  )
}
