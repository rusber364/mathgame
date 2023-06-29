import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import type { RoutesList } from '~/types/RouteList'
import { Button } from '~/components/common/Button'

export function NavigationLeague() {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToSingleTournament = () => navigation?.navigate('single-tournament')
  const navigateToTeamTournament = () => navigation?.navigate('team-tournament')
  const navigateToTopSinglePlayer = () => navigation?.navigate('top-single-player')
  const navigateToTopTeam = () => navigation?.navigate('top-team')

  return (
    <View>
      <Button onPress={navigateToSingleTournament}>{t('screens.league.singleTournament')}</Button>
      <Button onPress={navigateToTeamTournament}>{t('screens.league.teamTournament')}</Button>
      <Button onPress={navigateToTopSinglePlayer}>{t('screens.league.topSinglePlayer')}</Button>
      <Button onPress={navigateToTopTeam}>{t('screens.league.topTeam')}</Button>
    </View>
  )
}
