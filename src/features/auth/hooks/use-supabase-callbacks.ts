/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'
import Toast from 'react-native-toast-message'

import { supabase } from '~/database/supabase'

export function useSupabaseCallbacks() {
  const [isLoading, setLoading] = useState(false)

  async function registration(email: string, password: string) {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })

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

    if (error) {
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
