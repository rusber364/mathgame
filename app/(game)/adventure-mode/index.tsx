import { Link, Stack } from 'expo-router'
import { Text, StyleSheet, Pressable, View } from 'react-native'

import { range } from '~/features/game/utils/range'

function StageList() {
  const stages = range(1, 2)

  return (
    <View style={styles.container}>
      {stages.map((stage) => (
        <Link
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

export default function StagesScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Adventure: stage list' }} />
      <StageList />
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 2,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  text: {
    textAlign: 'center',
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
})
