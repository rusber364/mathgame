import type { PropsWithChildren } from 'react'
import { View, StyleSheet } from 'react-native'

export function NavigateContainer({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
})
