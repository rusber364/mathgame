import { fireEvent, render, screen } from '@testing-library/react-native'
import { useRouter } from 'expo-router'
import { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'

import LanguagesScreen from '@/(main)/index/languages'
import i18n from '~/langs/translation'

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}))

const useRouterMocked = useRouter as jest.Mock

function Wrapper({ children }: PropsWithChildren) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

test('render languages screen', async () => {
  const routerBack = jest.fn()
  useRouterMocked.mockReturnValue({ back: routerBack })

  render(<LanguagesScreen />, { wrapper: Wrapper })

  const Button = await screen.findByText(/Українська/i)
  await screen.findByText(/English/i)
  await screen.findByText(/Deutsch/i)
  await screen.findByText(/Русский/i)
  await screen.findByText(/Français/i)

  fireEvent.press(Button)

  expect(await screen.findByTestId('languages-screen-flat-list')).toHaveStyle({ padding: 15 })
  expect(routerBack).toHaveBeenCalled()
  expect(i18n.language).toBe('ukr')
})
