import { View } from 'react-native'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button'

export function AchievementNavigation() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigateToAchievementSingleScreen = () => router.push('/(achievements)/achievements-single')
  const navigateToAchievementTeamScreen = () => router.push('/(achievements)/achievements-team')
  const navigateToBonusScreen = () => router.push('/(achievements)/bonus')

  return (
    <View>
      <Button onPress={navigateToAchievementSingleScreen}>{t('screens.achievements.singleAchievements')}</Button>
      <Button onPress={navigateToAchievementTeamScreen}>{t('screens.achievements.teamAchievements')}</Button>
      <Button onPress={navigateToBonusScreen}>{t('screens.achievements.bonuses')}</Button>
    </View>
  )
}
