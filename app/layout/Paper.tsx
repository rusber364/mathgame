import { View, StyleSheet } from 'react-native'
import type { PropsWithChildren } from 'react'

export function Paper({ children }: PropsWithChildren) {
  return <View style={styles.root}>{children}</View>
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
