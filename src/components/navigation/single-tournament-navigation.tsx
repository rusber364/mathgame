import { Link } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button'
import { NavigateContainer } from '~/components/common/navigate-container'

export function SingleTournament() {
  const { t } = useTranslation()

  return (
    <NavigateContainer>
      <Link asChild href="/single-tournament-with-bets-screen">
        <Button>{t('screens.league.singleTournamentWithoutBets')}</Button>
      </Link>
      <Link asChild href="/single-tournament-without-bets-screen">
        <Button>{t('screens.league.singleTournamentWitBets')}</Button>
      </Link>
    </NavigateContainer>
  )
}
