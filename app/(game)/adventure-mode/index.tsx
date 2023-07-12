import { Link, Stack } from 'expo-router'
import { Text, StyleSheet, Pressable, View } from 'react-native'

import { range } from '~/features/game/utils/range'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function AdventureModeScreen() {
  const levels = range(1, 18)
  const stageId = 1
  const template = 'N + N'

  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Adventure:' }} />
      <Background>
        <Paper>
          <View style={styles.container}>
            {levels.map((lvlId) => (
              <Link
                key={lvlId}
                asChild
                href={{
                  pathname: `/adventure-mode/[stageId]/[template]/[lvlId]/`,
                  params: { lvlId, stageId, template },
                }}
              >
                <Pressable style={styles.button}>
                  <Text style={styles.text}>{lvlId}</Text>
                </Pressable>
              </Link>
            ))}
          </View>
        </Paper>
      </Background>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 2,
    padding: 10,
    flexGrow: 1,
    flexBasis: '33.333%',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
})
