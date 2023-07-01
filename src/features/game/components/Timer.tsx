import { Text, View, StyleSheet, Animated } from 'react-native'
import { useGameContext } from '../context/GameProvider'
import { formatTimer } from '../utils/formatTimer'
import { useFlasher } from './useFlasher'

export function Timer() {
  const { time } = useGameContext()
  const backgroundColor = useFlasher()

  if (time < 5000) {
    return (
      <Animated.View style={[styles.circle, { backgroundColor }]}>
        <Text style={styles.text}>{formatTimer(time)}</Text>
      </Animated.View>
    )
  }

  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{formatTimer(time)}</Text>
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
