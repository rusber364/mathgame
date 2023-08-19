import type { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

export function DrawerContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
})
