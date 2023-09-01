import { renderHook } from '@testing-library/react'
import { useGlobalSearchParams, usePathname, useRouter, useSegments } from 'expo-router'

import { useProtectedRoutes } from './use-protected-routes'

jest.mock('expo-router', () => ({
  useGlobalSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSegments: jest.fn(),
}))

const useGlobalSearchParamsMock = useGlobalSearchParams as jest.Mock
const usePathnameMock = usePathname as jest.Mock
const useRouterMock = useRouter as jest.Mock
const useSegmentsMock = useSegments as jest.Mock

describe('render hook - useProtectedRoutes', () => {
  it('should not redirect when user is not authenticated to navigate not protected route', () => {
    const routerReplaceMock = jest.fn()
    const isAuth = false
    const isAuthSyncStorage = false

    useRouterMock.mockReturnValue({ replace: routerReplaceMock })
    useSegmentsMock.mockReturnValue(['/public'])
    const { result } = renderHook(() => useProtectedRoutes(isAuth, isAuthSyncStorage))

    expect(result.current).toStrictEqual({ current: undefined })
    expect(routerReplaceMock).not.toBeCalled()
  })

  it('should redirect to sign-in when user is not authenticated to navigate protected route', () => {
    const routerReplaceMock = jest.fn()
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
