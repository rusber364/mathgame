import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button.comp'

import { NavigateContainer } from '../common/navigate-container'

export function LeagueNavigation() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigateToSingleTournament = () => router.push('/(league)/single-tournament')
  const navigateToTeamTournament = () => router.push('/(league)/team-tournament')
  const navigateToTopSinglePlayer = () => router.push('/(league)/top-single-player')
  const navigateToTopTeam = () => router.push('/(league)/top-team')

  return (
    <NavigateContainer>
      <Button onPress={navigateToSingleTournament}>{t('screens.league.singleTournament')}</Button>
      <Button onPress={navigateToTeamTournament}>{t('screens.league.teamTournament')}</Button>
      <Button onPress={navigateToTopSinglePlayer}>{t('screens.league.topSinglePlayer')}</Button>
      <Button onPress={navigateToTopTeam}>{t('screens.league.topTeam')}</Button>
    </NavigateContainer>
  )
}
