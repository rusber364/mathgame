import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
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
      <PaperProvider>
        <View style={styles.container}>
          {isUpdatingProfile ? (
            <>
              <TextInput label="name" placeholder="name" value={nickname} onChangeText={setNickname} />
              <Button icon="account-arrow-down" onPress={() => setUpdatingProfile(!isUpdatingProfile)}>
                Save nickname
              </Button>
            </>
          ) : (
            <>
              <Text>{nickname}</Text>
              <Button icon="account-arrow-left" onPress={() => setUpdatingProfile(!isUpdatingProfile)}>
                Change nickname
              </Button>
            </>
          )}
          <Button icon="account-arrow-up" onPress={handleUpdateProfile}>
            Update profile
          </Button>
        </View>
      </PaperProvider>
    </DrawerContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
})
