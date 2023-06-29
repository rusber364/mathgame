import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import type { RoutesList } from '~/types/RouteList'
import { Button } from '~/components/common/Button'

export function NavigationAchievement() {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToAchievementSingleScreen = () => navigation?.navigate('achievements-single')
  const navigateToAchievementTeamScreen = () => navigation?.navigate('achievements-team')
  const navigateToBonusScreen = () => navigation?.navigate('bonus')

  return (
    <View>
      <Button onPress={navigateToAchievementSingleScreen}>{t('screens.achievements.singleAchievements')}</Button>
      <Button onPress={navigateToAchievementTeamScreen}>{t('screens.achievements.teamAchievements')}</Button>
      <Button onPress={navigateToBonusScreen}>{t('screens.achievements.bonuses')}</Button>
    </View>
  )
}
