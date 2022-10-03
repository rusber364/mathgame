import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RoutesParamList } from '../types/RoutesParamList'
import { Button } from 'react-native'

type Props = NativeStackScreenProps<RoutesParamList>

export function Navigation({ navigation }: Props) {
  const navigateToHome = () => navigation.navigate('Home')
  const navigateToTeam = () => navigation.navigate('Team')
  const navigateToGameMode = () => navigation.navigate('GameMode')
  const navigateToAchievement = () => navigation.navigate('Achievement')

  return (
    <>
      <Button title="Home" onPress={navigateToHome} />
      <Button title="Team" onPress={navigateToTeam} />
      <Button title="GameMode" onPress={navigateToGameMode} />
      <Button title="Achievement" onPress={navigateToAchievement} />
    </>
  )
}
