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
    backgroundColor: '#f33',
    borderRadius: 30,
    marginHorizontal: 1,
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  headerLeftImage: {
    height: 54,
    width: 54,
  },
})
