import { useEffect, useState } from 'react'
import { Button as BaseButton, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { TextInput, Button } from 'react-native-paper'

// import { Button } from '~/components/common/button.comp'
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
      <PaperProvider>
        <View>
          {isUpdatingProfile ? (
            <>
              <TextInput label="name" placeholder="name" value={nickname} onChangeText={(text) => setNickname(text)} />
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
          <Button icon="account-arrow-up" onPress={() => setUpdatingProfile(!isUpdatingProfile)}>
            {' '}
            Update profile
          </Button>
        </View>
        <Button onPress={logOut}>Logout</Button>
      </PaperProvider>
    </DrawerContainer>
  )
}
