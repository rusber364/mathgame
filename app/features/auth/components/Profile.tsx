import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'

import { useAuthContext } from '../../../context/AuthProvider'
import { RoutesList } from '../../../types/RouteList'

export function Profile() {
  const isAuth = useAuthContext()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const handleProfile = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.root}>
      <AntDesign onPress={handleProfile} name="user" size={36} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    right: 15,
    top: 50,
    borderWidth: 1,
  },
})
