import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { View, StyleSheet, Pressable } from 'react-native'

import { useAuthContext } from '../context/AuthProvider'
import { RoutesList } from '../../../types/RouteList'

export function Profile() {
  const { isAuth } = useAuthContext()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const handleProfile = () => {
    navigation.navigate(isAuth ? 'Profile' : 'SignUp')
  }

  const handleLanguages = () => {
    navigation.navigate('Languages')
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
