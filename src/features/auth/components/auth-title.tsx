import type { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

export function AuthTitle({ children }: PropsWithChildren) {
  return <Text style={styles.root}>{children}</Text>
}

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
})
