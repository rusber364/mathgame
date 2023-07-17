import { View } from 'react-native'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/Button'

export function NavigationMainMenu() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigateToGameMode = () => router.push('game-mode')
  const navigateToTeam = () => router.push('team')
  const navigateToAchievement = () => router.push('achievement')
  const navigateToLeague = () => router.push('league')
  const navigateToOption = () => router.push('option')
  const navigateToPurchase = () => router.push('purchase')

  return (
    <View>
      <Button onPress={navigateToGameMode}>{t('screens.main.game')}</Button>
      <Button onPress={navigateToTeam}>{t('screens.main.team')}</Button>
      <Button onPress={navigateToAchievement}>{t('screens.main.achievements')}</Button>
      <Button onPress={navigateToLeague}>{t('screens.main.league')}</Button>
      <Button onPress={navigateToOption}>Option</Button>
      <Button onPress={navigateToPurchase}>Purchase</Button>
    </View>
  )
}
