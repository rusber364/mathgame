import { useRouter } from 'expo-router'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import arrow from '~/assets/arrow.png'

export function NavigationBack() {
  const router = useRouter()

  if (!router.canGoBack()) return null

  const navigationToBack = () => router.back()

  return (
    <TouchableOpacity style={styles.headerLeftButton} onPress={navigationToBack}>
      <Image source={arrow} style={styles.headerLeftImage} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  headerLeftButton: {
    borderRadius: 30,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginHorizontal: 1,
    backgroundColor: '#f33',
  },
  headerLeftImage: {
    width: 54,
    height: 54,
  },
})
