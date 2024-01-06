import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button.comp'

import { NavigateContainer } from '../common/navigate-container'

export function SingleTournament() {
  const router = useRouter()
  const { t } = useTranslation()

  const navigateToGameWithoutBets = () => router.push('/single-tournament-with-bets-screen')
  const navigateToGameWithBets = () => router.push('/single-tournament-without-bets-screen')

  return (
    <NavigateContainer>
      <Button onPress={navigateToGameWithoutBets}>{t('screens.league.singleTournamentWithoutBets')}</Button>
      <Button onPress={navigateToGameWithBets}>{t('screens.league.singleTournamentWitBets')}</Button>
    </NavigateContainer>
  )
}
