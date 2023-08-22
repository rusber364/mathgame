import { useEffect, useState } from 'react'
import { Button as BaseButton, Text, TextInput, View } from 'react-native'

import { Button } from '~/components/common/button.comp'
import { DrawerContainer } from '~/components/common/drawer-container'
import { supabase } from '~/database/supabase'

export default function ProfileScreen() {
  const [nickname, setNickname] = useState('user-nick-name')
  const [isUpdatingProfile, setUpdatingProfile] = useState(false)

  function logOut() {
    supabase?.auth.signOut()
  }

  async function handleUpdateProfile() {
    // TODO: update nickname to supabase
    // await supabase...
  }

  useEffect(() => {
    async function getNickname() {
      // TODO: get nickname with supabase
      // await supabase...
      // setNickname('')
    }

    getNickname()
  }, [])

  return (
    <DrawerContainer>
      <View>
        {isUpdatingProfile ? (
          <>
            <TextInput placeholder="name" value={nickname} onChangeText={setNickname} />
            <BaseButton title="save nickname" onPress={() => setUpdatingProfile(!isUpdatingProfile)} />
          </>
        ) : (
          <>
            <Text>{nickname}</Text>
            <BaseButton title="change nickname" onPress={() => setUpdatingProfile(!isUpdatingProfile)} />
          </>
        )}

        <BaseButton title="update profile" onPress={handleUpdateProfile} />
      </View>
      <Button onPress={logOut}>Logout</Button>
    </DrawerContainer>
  )
}
