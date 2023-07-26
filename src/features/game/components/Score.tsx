import { Text, View, StyleSheet } from 'react-native'
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
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
