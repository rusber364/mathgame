import { View, Text } from 'react-native'
import { Navigation } from '../components/Navigation'

export function HomeScreen({ navigation }) {
  return (
    <View>
      <Navigation navigation={navigation} />
      <Text>HomeSreen</Text>
    </View>
  )
}
