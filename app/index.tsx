import { MainMenuNavigation } from '~/components/navigation/MainMenuNavigation'
import { Profile } from '~/features/auth/components/Profile'
import { View } from 'react-native'

export default function HomeScreen() {
  return (
    <View>
      <View>
        <Profile />
      </View>
      <MainMenuNavigation />
    </View>
  )
}
