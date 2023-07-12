import { useLocalSearchParams, Stack } from 'expo-router'
import { View } from 'react-native'

import { Score } from '~/features/game/components/Score'
import { Task } from '~/features/game/components/Task'
import { Timer } from '~/features/game/components/Timer'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function AdventureLevelModeScreen() {
  const { game = [] } = useLocalSearchParams<{ game: string[] }>()
  const [stageId, template, lvlId] = game

  return (
    <>
      <Stack.Screen options={{ headerTitle: `${template}: ${stageId}stage/${lvlId}lvl` }} />
      <Background>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Score />
          <Timer />
        </View>
        <Paper>
          <View>
            <Task template={template} />
          </View>
        </Paper>
      </Background>
    </>
  )
}
