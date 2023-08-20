import { Button } from '~/components/common/button.comp'
import { DrawerContainer } from '~/components/common/drawer-container'
import { supabase } from '~/database/supabase'

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
