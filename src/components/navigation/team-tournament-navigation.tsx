import { Link } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button'
import { NavigateContainer } from '~/components/common/navigate-container'

export function TeamTournament() {
  const { t } = useTranslation()

  return (
    <NavigateContainer>
      <Link asChild href="/team-tournament-with-bets-screen">
        <Button>{t('screens.league.teamTournamentWithoutBets')}</Button>
      </Link>
      <Link asChild href="/team-tournament-without-bets-screen">
        <Button>{t('screens.league.teamTournamentWithBets')}</Button>
      </Link>
    </NavigateContainer>
  )
}
