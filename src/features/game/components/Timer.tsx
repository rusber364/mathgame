import { Text, View, StyleSheet } from 'react-native'
import { useGameContext } from '../context/GameProvider'
import { formatTimer } from '../utils/formatTimer'
import { FlasherView } from './FlasherView'

export function Timer() {
  const { time } = useGameContext()

  if (time < 5000) {
    return (
      <FlasherView style={styles.circle}>
        <Text style={styles.text}>{formatTimer(time)}</Text>
      </FlasherView>
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
