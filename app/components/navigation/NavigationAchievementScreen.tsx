import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { RoutesList } from '../../types/RouteList'
import { Button } from '../common/Button'
import { useTranslation } from 'react-i18next'

export function NavigationAchievement() {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToAchievementSingleScreen = () => navigation?.navigate('SingleAchievements')
  const navigateToAchievementTeamScreen = () => navigation?.navigate('TeamAchievements')
  const navigateToBonusScreen = () => navigation?.navigate('Bonuses')

  return (
    <View>
      <Button onPress={navigateToAchievementSingleScreen}>{t('screens.achievements.singleAchievements')}</Button>
      <Button onPress={navigateToAchievementTeamScreen}>{t('screens.achievements.teamAchievements')}</Button>
      <Button onPress={navigateToBonusScreen}>{t('screens.achievements.bonuses')}</Button>
    </View>
  )
}
