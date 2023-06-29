import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import type { RoutesList } from '~/types/RouteList'
import { Button } from '~/components/common/Button'

export function NavigationLeague() {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToSingleTournament = () => navigation?.navigate('SingleTournament')
  const navigateToTeamTournament = () => navigation?.navigate('TeamTournament')
  const navigateToTopSinglePlayer = () => navigation?.navigate('TopSinglePlayer')
  const navigateToTopTeam = () => navigation?.navigate('TopTeam')

  return (
    <View>
      <Button onPress={navigateToSingleTournament}>{t('screens.league.singleTournament')}</Button>
      <Button onPress={navigateToTeamTournament}>{t('screens.league.teamTournament')}</Button>
      <Button onPress={navigateToTopSinglePlayer}>{t('screens.league.topSinglePlayer')}</Button>
      <Button onPress={navigateToTopTeam}>{t('screens.league.topTeam')}</Button>
    </View>
  )
}
