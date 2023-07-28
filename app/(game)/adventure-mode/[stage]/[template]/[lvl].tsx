import { useLocalSearchParams, Stack } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

import { Score } from '~/features/game/components/Score'
import { Task } from '~/features/game/components/Task'
import { Timer } from '~/features/game/components/Timer'
import { useGameDispatch } from '~/store/redux'
import { registerTemplate } from '~/store/slices/task.slice'

export default function GameScreen() {
  const { stage, lvl, template } = useLocalSearchParams<{ stage: string; lvl: string; template: string }>()
  const dispatch = useGameDispatch()

  useEffect(() => {
    if (template) {
      dispatch(registerTemplate(Number(template)))
    }
  }, [dispatch, template])

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Adventure: ${stage}stage/${lvl}lvl` }} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Score />
        <Timer />
      </View>

      <View>
        <Task />
      </View>
    </>
  )
}
