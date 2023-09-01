import type { PropsWithChildren } from 'react'
import { StyleSheet, Text } from 'react-native'

export function AuthTitle({ children }: PropsWithChildren) {
  return <Text style={styles.root}>{children}</Text>
}

const styles = StyleSheet.create({
  root: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 20,
  },
})
