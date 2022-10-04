import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RoutesList } from '../../types/RouteList'
import { View, StyleSheet } from 'react-native'
import { Button } from '../common/Button'
import { useNavigation } from '@react-navigation/native'

export function NavigationMainMenu() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToTeam = () => navigation.navigate('Team')
  const navigateToGameMode = () => navigation.navigate('GameMode')
  const navigateToAchievement = () => navigation.navigate('Achievement')
  const navigateToLeague = () => navigation.navigate('League')

  return (
    <View style={style.nav}>
      <Button onPress={navigateToGameMode}>Game</Button>
      <Button onPress={navigateToTeam}>Team</Button>
      <Button onPress={navigateToAchievement}>Achievement</Button>
      <Button onPress={navigateToLeague}>League</Button>
    </View>
  )
}

const style = StyleSheet.create({
  nav: { alignSelf: 'stretch', paddingHorizontal: 15 },
})
