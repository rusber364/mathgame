import type { PropsWithChildren } from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import bg from '../assets/bg.png'

export function Background({ children }: PropsWithChildren) {
  return (
    <View style={styles.root}>
      <ImageBackground style={styles.background} source={bg} resizeMode="cover">
        {children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
})
