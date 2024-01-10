import { Link } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button'

import { NavigateContainer } from '../common/navigate-container'

export function LeagueNavigation() {
  const { t } = useTranslation()

  return (
    <NavigateContainer>
      <Link asChild href="/single-tournament">
        <Button>{t('screens.league.singleTournament')}</Button>
      </Link>
      <Link asChild href="/team-tournament">
        <Button>{t('screens.league.teamTournament')}</Button>
      </Link>
      <Link asChild href="/top-single-player">
        <Button>{t('screens.league.topSinglePlayer')}</Button>
      </Link>
      <Link asChild href="/top-team">
        <Button>{t('screens.league.topTeam')}</Button>
      </Link>
    </NavigateContainer>
  )
}
