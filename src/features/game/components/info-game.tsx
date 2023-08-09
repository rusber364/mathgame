import { View, StyleSheet } from 'react-native'

import { Score } from '~/features/game/components/score'
import { Timer } from '~/features/game/components/timer'

export function InfoGame() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Score />
        <Timer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 15,
  },
  content: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
})
