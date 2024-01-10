import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { range } from '~/features/game/utils/range'

export function StageList() {
  const stages = range(1, 2)

  return (
    <View style={styles.container}>
      {stages.map((stage) => (
        <Link
          push
          key={stage}
          asChild
          href={{
            pathname: `/(game)/adventure-mode/[stage]/`,
            params: { stage },
          }}
        >
          <Pressable style={styles.button}>
            <Text style={styles.text}>{stage}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    flexGrow: 1,
    margin: 2,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    textAlign: 'center',
  },
})
