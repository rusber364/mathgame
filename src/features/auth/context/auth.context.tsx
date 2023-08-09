import type { PropsWithChildren } from 'react'
import { useRouter, useSegments } from 'expo-router'
import { createContext, useContext, useEffect } from 'react'

import { useSupabaseSession, type TSession } from '../hooks/use-supabase-session'

type TAuthContext = {
  isAuth: boolean
  session: TSession
}

const AuthContext = createContext<TAuthContext>({ isAuth: false, session: null })

export function AuthProvider({ children }: PropsWithChildren) {
  const { isAuth, session } = useSupabaseSession()

  const segments: unknown[] = useSegments()
  const isProtectedRoutes = segments.includes('(protected)')
  const router = useRouter()

  useEffect(() => {
    if (isProtectedRoutes && !isAuth) {
      router.replace('/sign-in')
    }
  })

  return <AuthContext.Provider value={{ isAuth, session }}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}
