import { View } from 'react-native'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/Button'

export function NavigationGameMode() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigationToStoreMode = () => router.push('store-mode')
  const navigationToSurvivalMode = () => router.push('survival-mode')
  const navigationToKnowledge = () => router.push('knowledge')

  return (
    <View>
      <Button onPress={navigationToStoreMode}>{t('screens.gameMode.adventure')}</Button>
      <Button onPress={navigationToSurvivalMode}>{t('screens.gameMode.survivalMode')}</Button>
      <Button onPress={navigationToKnowledge}>{t('screens.gameMode.knowledge')}</Button>
    </View>
  )
}
