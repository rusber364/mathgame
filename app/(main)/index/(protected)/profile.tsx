import { useEffect, useState } from 'react'
import { Button as BaseButton, Text, TextInput, View } from 'react-native'

import { Button } from '~/components/common/button.comp'
import { DrawerContainer } from '~/components/common/drawer-container'
import { supabase } from '~/database/supabase'
import { useAuthContext } from '~/features/auth/context/auth.context'

export default function ProfileScreen() {
  const { session } = useAuthContext()
  const userId = session?.user.id
  const [idNickName, setNickName] = useState<number>()
  const [nickname, setNickname] = useState('user-nick-name')
  const [isUpdatingProfile, setUpdatingProfile] = useState(false)

  function logOut() {
    supabase?.auth.signOut()
  }

  async function handleUpdateProfile() {
    try {
      if (userId && idNickName) {
        await supabase
          .from('game_users')
          .upsert({ nick_name: nickname, user_id: userId, id: idNickName })
          .eq('user_id', userId)
          .select('nick_name')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getNickname() {
      try {
        const { data } = await supabase.from('game_users').select('id,nick_name').eq('user_id', userId)
        if (data) {
          setNickName(data[0].id)
          setNickname(data[0].nick_name)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getNickname()
  }, [userId])

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
