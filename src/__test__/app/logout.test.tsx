import { render, screen } from '@testing-library/react-native'
import { useRouter } from 'expo-router'

import LogoutScreen from '@/(main)/index/logout'
import { supabase } from '~/database/supabase'

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}))

jest.mock('~/database/supabase', () => ({
  supabase: { auth: { signOut: jest.fn().mockResolvedValue({ error: null }) } },
}))

const useRouterMocked = useRouter as jest.Mock

test('render logout screen', async () => {
  const routerReplace = jest.fn()
  useRouterMocked.mockReturnValue({ replace: routerReplace })

  render(<LogoutScreen />)
  // TODO: add delay 1s to component LogoutScreen and add test with fake timers

  expect(await screen.findByTestId('logout-screen')).toHaveStyle({ height: '100%', justifyContent: 'center' })
  expect(routerReplace).toHaveBeenNthCalledWith(1, '/')
  expect(supabase.auth.signOut).toHaveBeenCalledTimes(1)
  expect(await screen.findByTestId('logout-activity-indicator')).toHaveProp('size', 'large')
})
