import { useRouter, useSegments, usePathname, useGlobalSearchParams, Href } from 'expo-router'
import { useEffect, useRef } from 'react'

type TSearchParams = ReturnType<typeof useGlobalSearchParams>

export function useProtectedRoutes(isAuth = false) {
  const router = useRouter()
  const params = useGlobalSearchParams<TSearchParams>()
  const pathname = usePathname() as Href<string>
  const segments: unknown[] = useSegments()
  const isProtectedRoutes = segments.includes('(protected)')
  const protectedPathname = useRef<Href<string>>()
  const protectedParams = useRef<TSearchParams>({})

  useEffect(() => {
    let idTimer!: NodeJS.Timeout | number

    if (isAuth && protectedPathname.current) {
      clearTimeout(idTimer)
      if (protectedPathname.current) {
        router.push({
          pathname: protectedPathname.current,
          params: protectedParams.current,
        })

        protectedPathname.current = void 0
        protectedParams.current = {}
      }
    }

    if (isProtectedRoutes && !isAuth) {
      idTimer = setTimeout(() => {
        protectedPathname.current = pathname
        protectedParams.current = params
        router.replace('/sign-in')
      }, 100)
    }

    return () => clearTimeout(idTimer)
  }, [isAuth, isProtectedRoutes, params, pathname, router])
}
