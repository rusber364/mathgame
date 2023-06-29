import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import type { RoutesList } from '~/types/RouteList'
import { Button } from '~/components/common/Button'

export function NavigationGameMode() {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigationToStoreMode = () => navigation?.navigate('store-mode')
  const navigationToSurvivalMode = () => navigation?.navigate('survival-mode')
  const navigationToKnowledge = () => navigation?.navigate('knowledge')

  return (
    <View>
      <Button onPress={navigationToStoreMode}>{t('screens.gameMode.adventure')}</Button>
      <Button onPress={navigationToSurvivalMode}>{t('screens.gameMode.survivalMode')}</Button>
      <Button onPress={navigationToKnowledge}>{t('screens.gameMode.knowledge')}</Button>
    </View>
  )
}
