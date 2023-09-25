import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper'

import { DrawerContainer } from '~/components/common/drawer-container'
import { supabase } from '~/database/supabase'
import { useAuthContext } from '~/features/auth/context/auth.context'
import Avatar from '~/features/profile/components/avatar'

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
      <View style={styles.avatar}>
        <Avatar size={300} />
      </View>
      <View style={styles.container}>
        <View style={styles.object1}>
          <TextInput
            label="nickname"
            placeholder="your nickname..."
            value={nickname}
            onChangeText={setNickname}
            disabled={isUpdatingProfile}
          />
        </View>
        <View style={styles.object2}>
          <IconButton
            icon={isUpdatingProfile ? 'account-edit' : 'account-edit-outline'}
            size={50}
            iconColor="red"
            onPress={() => setUpdatingProfile(!isUpdatingProfile)}
          >
            {' '}
            {isUpdatingProfile ? isUpdatingProfile : !isUpdatingProfile}
          </IconButton>
          {/* <Button></Button> */}
        </View>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 'auto',
    height: '50%',
    margin: '5%',
    padding: '1%',
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {},
  updateProfile: {
    height: '20%',
    alignItems: 'center',
  },
  object1: {
    width: '95%',
    height: '15%',
  },
  object2: {
    width: '5%',
    height: '10%',
    alignItems: 'center',
    textAlign: 'center',
    margin: -10,
    padding: 0,
    position: 'relative',
    top: 'auto',
  },
})
