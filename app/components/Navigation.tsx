import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RoutesParamList } from '../types/RoutesParamList'
import { View, StyleSheet } from 'react-native'
import { Button } from './common/Button'

type Props = NativeStackScreenProps<RoutesParamList>

export function Navigation({ navigation }: Props) {
  const navigateToTeam = () => navigation.navigate('Team')
  const navigateToGameMode = () => navigation.navigate('GameMode')
  const navigateToAchievement = () => navigation.navigate('Achievement')

  return (
    <View style={style.nav}>
      <Button onPress={navigateToGameMode}>Game</Button>
      <Button onPress={navigateToTeam}>Team</Button>
      <Button onPress={navigateToAchievement}>Achievement</Button>
    </View>
  )
}

const style = StyleSheet.create({
  nav: { alignSelf: 'stretch', paddingHorizontal: 15 },
})
