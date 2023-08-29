import { useRouter } from 'expo-router'
import { useState } from 'react'
import Toast from 'react-native-toast-message'

import { supabase } from '~/database/supabase'
import { useAuthContext } from '~/features/auth/context/auth.context'
import { delay } from '~/utils/delay'

export function useSupabaseCallbacks() {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()
  const { protectedRoute } = useAuthContext()

  async function registration(email: string, password: string) {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    // TODO: delete delay
    await delay(1000)

    if (!error) {
      Toast.show({
        type: 'info',
        text1: 'confirm your email',
        text2: `send to ${email}`,
      })
    } else {
      Toast.show({
        type: 'error',
        text1: error.name,
        text2: error.message,
      })
    }

    setLoading(false)
  }

  async function login(email: string, password: string) {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    // TODO: delete delay
    await delay(1000)

    if (!error) {
      if (protectedRoute?.pathname.current) {
        const pathname = protectedRoute.pathname.current
        const params = protectedRoute.params.current
        router.push({ pathname, params })
      } else {
        // TODO: fix types route profile
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        router.push('/profile')
      }
    } else {
      Toast.show({
        type: 'error',
        text1: error.name,
        text2: error.message,
      })
    }
    setLoading(false)
  }

  return { isLoading, registration, login }
}
