import { View } from 'react-native'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/Button'

export function NavigationAchievement() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigateToAchievementSingleScreen = () => router.push('achievements-single')
  const navigateToAchievementTeamScreen = () => router.push('achievements-team')
  const navigateToBonusScreen = () => router.push('bonus')

  return (
    <View>
      <Button onPress={navigateToAchievementSingleScreen}>{t('screens.achievements.singleAchievements')}</Button>
      <Button onPress={navigateToAchievementTeamScreen}>{t('screens.achievements.teamAchievements')}</Button>
      <Button onPress={navigateToBonusScreen}>{t('screens.achievements.bonuses')}</Button>
    </View>
  )
}
