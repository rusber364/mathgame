import { Text } from 'react-native'
import { Background } from '../../layout/Background'
import { Paper } from '../../layout/Paper'
import { supabase } from '../../database/supabase'
import { Button } from '../../components/common/Button'

export function ProfileScreen() {
  function logOut() {
    supabase?.auth.signOut()
  }

  return (
    <Background>
      <Paper>
        <Text>Profile</Text>
        <Button onPress={logOut}>Logout</Button>
      </Paper>
    </Background>
  )
}
