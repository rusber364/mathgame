import type { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

import { supabase } from '~/database/supabase'

export type TSession = Session | null

export function useSupabaseSession() {
  const [isAuth, setAuth] = useState(false)
  const [session, setSession] = useState<TSession>(null)

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

  return { isAuth, session }
}
