import { Link } from '@react-navigation/native'
import { Button } from 'react-native'

export function Navigation({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="GameMode" onPress={() => navigation.navigate('GameMode')} />
      <Button title="Team" onPress={() => navigation.navigate('Team')} />
    </>
  )
}
