import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { AuthError } from '@supabase/supabase-js'

export function authError(error: unknown): { error: FetchBaseQueryError } {
  const { name, message } = error as AuthError

  return {
    error: {
      status: 'CUSTOM_ERROR',
      error: `${name}:${message}`,
    },
  }
}
