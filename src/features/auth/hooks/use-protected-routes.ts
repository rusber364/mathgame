import { Href, useGlobalSearchParams, usePathname, useRouter, useSegments } from 'expo-router'
import { useEffect, useRef } from 'react'

type TPathname = Href<string>
type TSearchParams = ReturnType<typeof useGlobalSearchParams>

type ProtectedRoute = {
  pathname: TPathname
  params: TSearchParams
}

export function useProtectedRoutes(isAuth = false, isAuthSyncStorage = false) {
  const router = useRouter()
  const params = useGlobalSearchParams<TSearchParams>()
  const pathname = usePathname() as TPathname
  const segments: unknown[] = useSegments()

  const isProtectedRoutes = segments.includes('(protected)')
  const redirectAfterAuth = useRef<ProtectedRoute>()

  useEffect(() => {
    if (isProtectedRoutes && isAuth && !isAuthSyncStorage) {
      if (redirectAfterAuth.current?.pathname) {
        if (Object.keys(redirectAfterAuth.current.params).length) {
          router.replace(redirectAfterAuth.current)
        } else {
          router.replace(redirectAfterAuth.current.pathname)
        }
        redirectAfterAuth.current = void 0
      }
    }

    if (isProtectedRoutes && !isAuth && !isAuthSyncStorage) {
      redirectAfterAuth.current = { pathname, params }
      router.replace('/sign-in')
    }
  }, [isAuth, isAuthSyncStorage, isProtectedRoutes, params, pathname, router])

  return redirectAfterAuth
}
