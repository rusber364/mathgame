import { StyleSheet, Text, View } from 'react-native'

import { useGameSelector } from '~/store/redux'
import { getScore } from '~/store/slices/game.slice'

export function Score() {
  const score = useGameSelector(getScore)

  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    width: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
