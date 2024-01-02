import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

type Err = {
  text1: string
  text2: string
}

export function getErrorMessage(e?: FetchBaseQueryError | SerializedError): Err {
  if (typeof e === 'object' && e && 'status' in e) {
    switch (e.status) {
      case 'CUSTOM_ERROR': {
        const [text1, text2] = e.error.split(':')
        return { text1, text2 }
      }
    }
  }

  return { text1: 'error name', text2: 'error message' }
}
