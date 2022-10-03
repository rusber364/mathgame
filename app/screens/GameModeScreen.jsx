import { View, Text } from 'react-native'
import { Navigation } from '../components/Navigation'

export function GameModeScreen({ navigation }) {
  return (
    <View>
      <Navigation navigation={navigation} />
      <Text>GameModeScreen</Text>
    </View>
  )
}
