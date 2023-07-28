import { View } from 'react-native'

import { Task } from '~/features/game/components/Task'
import { Score } from '~/features/game/components/Score'
import { Timer } from '~/features/game/components/Timer'

export default function SurvivalModeScreen() {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Score />
        <Timer />
      </View>

      <View>
        <Task />
      </View>
    </View>
  )
}
