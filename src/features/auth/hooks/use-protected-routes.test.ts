import { renderHook } from '@testing-library/react'
import { useGlobalSearchParams, usePathname, useRouter, useSegments } from 'expo-router'
import { type Mock, vi } from 'vitest'

import { useProtectedRoutes } from './use-protected-routes'

vi.mock('expo-router', () => ({
  useGlobalSearchParams: vi.fn(),
  usePathname: vi.fn(),
  useRouter: vi.fn(),
  useSegments: vi.fn(),
}))

const useGlobalSearchParamsMock = useGlobalSearchParams as Mock
const usePathnameMock = usePathname as Mock
const useRouterMock = useRouter as Mock
const useSegmentsMock = useSegments as Mock

describe('render hook - useProtectedRoutes', () => {
  it('should not redirect when user is not authenticated to navigate not protected route', () => {
    const routerReplaceMock = vi.fn()
    const isAuth = false
    const isAuthSyncStorage = false

    useRouterMock.mockReturnValue({ replace: routerReplaceMock })
    useSegmentsMock.mockReturnValue(['/public'])
    const { result } = renderHook(() => useProtectedRoutes(isAuth, isAuthSyncStorage))

    expect(result.current).toStrictEqual({ current: undefined })
    expect(routerReplaceMock).not.toBeCalled()
  })

  it('should redirect to sign-in when user is not authenticated to navigate protected route', () => {
    const routerReplaceMock = vi.fn()
    const pathname = '/profile'
    const params = { userId: 1 }
    const segments = ['(protected)', pathname]
    let isAuth = false
    let isAuthSyncStorage = false

    useRouterMock.mockReturnValue({ replace: routerReplaceMock })
    useSegmentsMock.mockReturnValue(segments)
    usePathnameMock.mockReturnValue(pathname)
    useGlobalSearchParamsMock.mockReturnValue(params)

    const { result, rerender } = renderHook(() => useProtectedRoutes(isAuth, isAuthSyncStorage))

    expect(result.current).toStrictEqual({ current: { pathname, params } })
    expect(routerReplaceMock).toHaveBeenNthCalledWith(1, '/sign-in')
    isAuth = true
    rerender()
    expect(routerReplaceMock).toHaveBeenNthCalledWith(2, { pathname, params })
    isAuthSyncStorage = true
    rerender()
    expect(routerReplaceMock).toBeCalledTimes(2)
    expect(result.current).toStrictEqual({ current: undefined })
  })
})
