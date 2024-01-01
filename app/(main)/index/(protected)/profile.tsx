import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, IconButton, MD3Colors, TextInput } from 'react-native-paper'

import { DrawerContainer } from '~/components/common/drawer-container'
import { supabase } from '~/database/supabase'
import { useAuthContext } from '~/features/auth/context/auth.context'
import Avatar from '~/features/profile/components/avatar'

export default function ProfileScreen() {
  const { session } = useAuthContext()
  const userId = session?.user.id
  const [idNickname, setIdNickname] = useState<number>()
  const [nickname, setNickname] = useState('user-nick-name')
  const [isUpdatingProfile, setUpdatingProfile] = useState(false)

  async function handleUpdateProfile() {
    try {
      if (userId && idNickname) {
        await supabase.from('game_users').upsert({ nick_name: nickname, id: idNickname })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getNickname() {
      try {
        const { data } = await supabase.from('game_users').select('id,nick_name').eq('user_id', userId)
        if (data && data.length) {
          const { id, nick_name } = data[0]
          setIdNickname(id)
          setNickname(nick_name)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getNickname()
  }, [userId])

  return (
    <DrawerContainer>
      <View style={styles.avatarContainer}>
        <Avatar size={200} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="nickname"
          placeholder="your nickname..."
          value={nickname}
          onChangeText={setNickname}
          disabled={!isUpdatingProfile}
          style={styles.input}
        />
        <IconButton
          icon={isUpdatingProfile ? 'account-edit' : 'account-edit-outline'}
          size={30}
          iconColor={MD3Colors.error50}
          onPress={() => setUpdatingProfile(!isUpdatingProfile)}
          mode="contained-tonal"
        />
      </View>
      <View style={styles.updateProfile}>
        <Button icon="update" onPress={handleUpdateProfile} disabled={!isUpdatingProfile}>
          Update profile
        </Button>
      </View>
    </DrawerContainer>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 'auto',
    marginHorizontal: 10,
  },
  input: {
    flexGrow: 2,
  },
  updateProfile: {
    margin: 20,
  },
})
