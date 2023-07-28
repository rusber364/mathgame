import { View, StyleSheet } from 'react-native'

import { Score } from '~/features/game/components/Score'
import { Timer } from '~/features/game/components/Timer'

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
    width: '100%',
    padding: 15,
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})
