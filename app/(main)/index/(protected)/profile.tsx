import { useEffect, useState } from 'react'
import { Button as BaseButton, Text, TextInput, View } from 'react-native'
import { s } from 'vitest/dist/types-3c7dbfa5'

import { Button } from '~/components/common/button.comp'
import { DrawerContainer } from '~/components/common/drawer-container'
import { supabase } from '~/database/supabase'

// const currentUser = supabase.auth.user()
// if  (currentUser){
// const userId =currentUser.id
// const newNickname='NewNickname'
// supabase
// .from('users')
// .update({nickname:newNickname})
// .eq('id',userId).then(({data, error})=>{
//   if(error){
//     console.error('error')
//   }else{
//     console.log('success')
//   }

// }
// )
// }

export default function ProfileScreen() {
  const [nickname, setNickname] = useState('user-nick-name')
  const [isUpdatingProfile, setUpdatingProfile] = useState(false)

  function logOut() {
    supabase?.auth.signOut()
  }

  async function handleUpdateProfile(newNickname) {
    try {
      const { error } = await supabase.from('users').update({ nickname: newNickname }).eq('id', supabase.auth.user.id)
      if (error) {
        throw error
      }
      console.log('success')
      setNickname(newNickname)
    } catch (error) {
      console.error('error')
    }
  }

  useEffect(() => {
    async function getNickname() {
      try {
        const { error } = await supabase.from('users').update('nickname').eq('id', supabase.auth.user().id)
        if (error) {
          throw error
        }
        if (data.length > 0) {
          setNickname(data[0].nickname)
        }
      } catch (error) {
        console.error('error')
      }
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
