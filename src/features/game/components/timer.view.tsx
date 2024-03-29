import { StyleSheet, Text, View } from 'react-native'

import { useGameSelector } from '~/store/redux'
import { getTime } from '~/store/slices/timer.slice'

import { formatTimer } from '../utils/format-timer'
import { FlasherView } from './flasher.view'

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
