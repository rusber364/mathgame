import { supabase } from '~/database/supabase'
import { Button } from '~/components/common/button'
import { DrawerContainer } from '~/components/common/drawer-container'

export default function ProfileScreen() {
  function logOut() {
    supabase?.auth.signOut()
  }

  return (
    <DrawerContainer>
      <Button onPress={logOut}>Logout</Button>
    </DrawerContainer>
  )
}
