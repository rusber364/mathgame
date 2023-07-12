import { useRouter } from 'expo-router'
import { Entypo, AntDesign } from '@expo/vector-icons'
import { View, StyleSheet, Pressable } from 'react-native'

import { useAuthContext } from '../context/AuthProvider'

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
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
  icon: {
    borderWidth: 1,
    padding: 10,
  },
})
