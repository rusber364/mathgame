import { Href, useGlobalSearchParams, usePathname, useRouter, useSegments } from 'expo-router'
import { useEffect, useRef } from 'react'

type TSearchParams = ReturnType<typeof useGlobalSearchParams>

export function useProtectedRoutes(isAuth = false, isAuthSyncStorage = false) {
  const router = useRouter()
  const params = useGlobalSearchParams<TSearchParams>()
  const pathname = usePathname() as Href<string>
  const segments: unknown[] = useSegments()
  const isProtectedRoutes = segments.includes('(protected)')
  const protectedPathname = useRef<Href<string>>()
  const protectedParams = useRef<TSearchParams>({})

  useEffect(() => {
    if (isProtectedRoutes && isAuth && !isAuthSyncStorage) {
      if (protectedPathname.current) {
        router.replace({
          pathname: protectedPathname.current,
          params: protectedParams.current,
        })
        protectedPathname.current = void 0
        protectedParams.current = {}
      }
    }

    if (isProtectedRoutes && !isAuth && !isAuthSyncStorage) {
      protectedPathname.current = pathname
      protectedParams.current = params
      router.replace('/sign-in')
    }
  }, [isAuth, isAuthSyncStorage, isProtectedRoutes, params, pathname, router])
}
