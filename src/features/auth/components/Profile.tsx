import { useRouter } from 'expo-router'
import { Entypo, AntDesign } from '@expo/vector-icons'
import { View, StyleSheet, Pressable } from 'react-native'

import { useAuthContext } from '../context/auth.context'

export function Profile() {
  const { isAuth } = useAuthContext()
  const router = useRouter()

  const handleProfile = () => {
    router.push(isAuth ? 'profile' : 'sign-up')
  }

  const handleLanguages = () => {
    router.push('languages')
  }

  return (
    <View style={styles.root}>
      <Pressable onPress={handleProfile}>
        <AntDesign style={styles.icon} name="user" size={36} color="black" />
      </Pressable>
      <Pressable onPress={handleLanguages}>
        <Entypo style={[styles.icon, { marginRight: 10 }]} name="language" size={36} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row-reverse',
    position: 'absolute',
    top: 10,
    right: 15,
  },
  icon: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
})
