import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button.comp'

import { NavigateContainer } from '../common/navigate-container'

export function TeamTournament() {
  const { t } = useTranslation()
  const router = useRouter()

  const navigateToTeamTournamentWithBets = () => router.push('/team-tournament-with-bets-screen')
  const navigateToTeamTournamentWithoutBets = () => router.push('/team-tournament-without-bets-screen')

  return (
    <NavigateContainer>
      <Button onPress={navigateToTeamTournamentWithBets}>{t('screens.league.teamTournamentWithoutBets')}</Button>
      <Button onPress={navigateToTeamTournamentWithoutBets}>{t('screens.league.teamTournamentWithBets')}</Button>
    </NavigateContainer>
  )
}
