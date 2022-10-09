import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { RoutesList } from '../../types/RouteList'
import { Button } from '../common/Button'

export function NavigationAchievement() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToAchievementSingleScreen = () => navigation?.navigate('SingleAchievements')
  const navigateToAchievementTeamScreen = () => navigation?.navigate('TeamAchievements')
  const navigateToBonusScreen = () => navigation?.navigate('Bonuses')

  return (
    <View style={style.nav}>
      <Button onPress={navigateToAchievementSingleScreen}>SingleAchievements</Button>
      <Button onPress={navigateToAchievementTeamScreen}>TeamAchievements</Button>
      <Button onPress={navigateToBonusScreen}>Bonuses</Button>
    </View>
  )
}

const style = StyleSheet.create({
  nav: { alignSelf: 'stretch', paddingHorizontal: 15 },
})
