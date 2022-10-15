import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { RoutesList } from '../../types/RouteList'
import { Button } from '../common/Button'
import { Paper } from '../../layout/Paper'
import { useTranslation } from 'react-i18next'

export function NavigationGameMode() {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigationToStoreMode = () => navigation?.navigate('StoreMode')
  const navigationToSurvivalMode = () => navigation?.navigate('SurvivalMode')
  const navigationToKnowledge = () => navigation?.navigate('Knowledge')

  return (
    <View style={style.nav}>
      <Button onPress={navigationToStoreMode}>{t('screens.gameMode.adventure')}</Button>
      <Button onPress={navigationToSurvivalMode}>{t('screens.gameMode.survivalMode')}</Button>
      <Button onPress={navigationToKnowledge}>{t('screens.gameMode.knowledge')}</Button>
    </View>
  )
}

const style = StyleSheet.create({
  nav: { alignSelf: 'stretch', paddingHorizontal: 15 },
})
