import type { PropsWithChildren } from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { initSupabase } from '../database/supabase'

const AuthContext = createContext({ isAuth: false })

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    // TODO off supabase
    // initSupabase()
  }, [])

  return <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}
