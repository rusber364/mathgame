import { I18nextProvider } from 'react-i18next'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useFlipper } from '@react-navigation/devtools'
import { Navigator } from './app/Navigator'
import i18n from './app/translation'

export default function App() {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </I18nextProvider>
  )
}
