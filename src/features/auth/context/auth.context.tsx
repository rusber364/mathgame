import { createContext, type PropsWithChildren, useContext } from 'react'

import { useProtectedRoutes } from '../hooks/use-protected-routes'
import { type TSession, useSupabaseSession } from '../hooks/use-supabase-session'

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
