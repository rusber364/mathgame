import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

import { DrawerContainer } from '~/components/common/drawer-container'
import { supabase } from '~/database/supabase'
import { useAuthContext } from '~/features/auth/context/auth.context'

export default function ProfileScreen() {
  const { session } = useAuthContext()
  const userId = session?.user.id
  const [idNickName, setNickName] = useState<number>()
  const [nickname, setNickname] = useState('user-nick-name')
  const [isUpdatingProfile, setUpdatingProfile] = useState(false)

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
      <View style={styles.container}>
        <TextInput
          label="nickname"
          placeholder="your nickname..."
          value={nickname}
          onChangeText={setNickname}
          disabled={isUpdatingProfile}
        />
        <Button
          icon={isUpdatingProfile ? 'account-edit' : 'account-edit-outline'}
          onPress={() => setUpdatingProfile(!isUpdatingProfile)}
        >
          {isUpdatingProfile ? 'Change nickname' : 'Save nickname'}
        </Button>
        <Button icon="update" onPress={handleUpdateProfile} disabled={!isUpdatingProfile}>
          Update profile
        </Button>
      </View>
    </DrawerContainer>
  )
}
const styles = StyleSheet.create({
  container: {},
})
