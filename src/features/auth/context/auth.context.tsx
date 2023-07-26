import type { Session } from '@supabase/supabase-js'
import type { PropsWithChildren } from 'react'
import { useRouter, useSegments } from 'expo-router'
import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '~/database/supabase'

type TAuthContext = {
  isAuth: boolean
  session: TSession
}

type TSession = Session | null

const AuthContext = createContext<TAuthContext>({ isAuth: false, session: null })

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuth, setAuth] = useState(false)
  const [session, setSession] = useState<TSession>(null)
  const [protectedRoutes] = useSegments()
  const router = useRouter()

  useEffect(() => {
    async function getAuthSession() {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        setSession(data.session)
      }
      setAuth(data.session ? true : false)
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabase auth event: ${event}`)
      setSession(session)
      setAuth(session ? true : false)
    })

    getAuthSession()

    return () => authListener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (protectedRoutes === '(protected)' && !isAuth) {
      router.replace('/sign-in')
    }
  }, [isAuth, protectedRoutes, router])

  return <AuthContext.Provider value={{ isAuth, session }}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}
