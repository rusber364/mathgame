import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button'
import { NavigateContainer } from '../common/navigate-container'

export function GameNavigation() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigationToStoreMode = () => router.push('/(game)/adventure-mode')
  const navigationToSurvivalMode = () => router.push('/(game)/survival-mode')
  const navigationToKnowledge = () => router.push('/(game)/knowledge')

  return (
    <NavigateContainer>
      <Button onPress={navigationToStoreMode}>{t('screens.gameMode.adventure')}</Button>
      <Button onPress={navigationToSurvivalMode}>{t('screens.gameMode.survivalMode')}</Button>
      <Button onPress={navigationToKnowledge}>{t('screens.gameMode.knowledge')}</Button>
    </NavigateContainer>
  )
}
