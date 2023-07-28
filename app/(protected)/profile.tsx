import { Text, View } from 'react-native'

import { supabase } from '~/database/supabase'
import { Button } from '~/components/common/Button'

export default function ProfileScreen() {
  function logOut() {
    supabase?.auth.signOut()
  }

  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={logOut}>Logout</Button>
    </View>
  )
}
