import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button'
import { NavigateContainer } from '../common/navigate-container'

export function MainMenuNavigation() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigateToGameMode = () => router.push('/(main)/game-mode')
  const navigateToTeam = () => router.push('/(main)/team')
  const navigateToAchievement = () => router.push('/(main)/achievement')
  const navigateToLeague = () => router.push('/(main)/league')
  const navigateToOption = () => router.push('/(main)/option')
  const navigateToPurchase = () => router.push('/(main)/purchase')

  return (
    <NavigateContainer>
      <Button onPress={navigateToGameMode}>{t('screens.main.game')}</Button>
      <Button onPress={navigateToTeam}>{t('screens.main.team')}</Button>
      <Button onPress={navigateToAchievement}>{t('screens.main.achievements')}</Button>
      <Button onPress={navigateToLeague}>{t('screens.main.league')}</Button>
      <Button onPress={navigateToOption}>Option</Button>
      <Button onPress={navigateToPurchase}>Purchase</Button>
    </NavigateContainer>
  )
}
