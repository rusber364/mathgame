import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { AuthResponse, AuthTokenResponsePassword } from '@supabase/supabase-js'

import { supabase } from '~/database/supabase'
import type { AuthCredentials } from '~/features/auth/context/auth-fields.context'
import { authError } from '~/features/auth/utils/auth-error'

export const supabaseApi = createApi({
  reducerPath: 'supabaseApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    registration: builder.mutation<AuthResponse['data'], AuthCredentials>({
      async queryFn({ email, password }) {
        try {
          const { error, data } = await supabase.auth.signUp({ email, password })
          if (error) throw error
          return { data }
        } catch (error) {
          return authError(error)
        }
      },
    }),
    login: builder.mutation<AuthTokenResponsePassword['data'], AuthCredentials>({
      async queryFn({ email, password }) {
        try {
          const { error, data } = await supabase.auth.signInWithPassword({ email, password })
          if (error) throw error
          return { data }
        } catch (error) {
          return authError(error)
        }
      },
    }),
  }),
})

export const { useLoginMutation, useRegistrationMutation } = supabaseApi
