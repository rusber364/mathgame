import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { RoutesList } from '../../types/RouteList'
import { Button } from '../common/Button'
import { Paper } from '../../layout/Paper'

export function NavigationLeague() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToSingleTournament = () => navigation?.navigate('SingleTournament')
  const navigateToTeamTournament = () => navigation?.navigate('TeamTournament')
  const navigateToTopSinglePlayer = () => navigation?.navigate('TopSinglePlayer')
  const navigateToTopTeam = () => navigation?.navigate('TopTeam')

  return (
    <View style={style.nav}>
      <Button onPress={navigateToSingleTournament}>SingleTournament</Button>
      <Button onPress={navigateToTeamTournament}>TeamTournament</Button>
      <Button onPress={navigateToTopSinglePlayer}>TopSinglePlayer</Button>
      <Button onPress={navigateToTopTeam}>TopTeam</Button>
    </View>
  )
}

const style = StyleSheet.create({
  nav: { alignSelf: 'stretch', paddingHorizontal: 15 },
})
