import { View } from 'react-native'

import { Task } from '~/features/game/components/Task'
import { Score } from '~/features/game/components/Score'
import { Timer } from '~/features/game/components/Timer'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export function SurvivalModeScreen() {
  return (
    <Background>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Score />
        <Timer />
      </View>
      <Paper>
        <View>
          <Task />
        </View>
      </Paper>
    </Background>
  )
}
