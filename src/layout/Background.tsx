import { useRoute } from '@react-navigation/native'
import type { PropsWithChildren } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import bg from '~/assets/bg.png'

// TODO?: Delete this component?
export function Background({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets()
  const router = useRoute()
  const isHomeScreen = router.name === 'home'

  return (
    <View style={[styles.root, isHomeScreen && insets]}>
      <ImageBackground style={styles.background} source={bg} resizeMode="cover">
        {children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
})
