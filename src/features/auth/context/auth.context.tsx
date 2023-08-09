import { createContext, useContext, type PropsWithChildren } from 'react'

import { useSupabaseSession, type TSession } from '../hooks/use-supabase-session'
import { useProtectedRoutes } from '../hooks/use-protected-routes'

type TAuthContext = {
  isAuth: boolean
  session: TSession
}

const AuthContext = createContext<TAuthContext>({ isAuth: false, session: null })

export function AuthProvider({ children }: PropsWithChildren) {
  const { isAuth, session } = useSupabaseSession()

  useProtectedRoutes(isAuth)

  return <AuthContext.Provider value={{ isAuth, session }}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}
