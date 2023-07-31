import { Text, View, StyleSheet } from 'react-native'
import { useGameSelector } from '~/store/redux'
import { formatTimer } from '../utils/formatTimer'
import { FlasherView } from './FlasherView'
import { getTime } from '~/store/slices/timer.slice'

export function Timer() {
  const time = useGameSelector(getTime)

  if (time > 0 && time < 5999) {
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
    height: 50,
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
