import { StyleSheet, View } from 'react-native'

import { Score } from '~/features/game/components/score.view'
import { Timer } from '~/features/game/components/timer.view'

export function InfoGame() {
  return (
    <View style={styles.container}>
      <Score />
      <Timer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
})
