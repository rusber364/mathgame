import { Stack, useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

import { InfoGame } from '~/features/game/components/info-game'
import { Task } from '~/features/game/components/task.view'
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
      <View style={{ flex: 1 }}>
        <InfoGame />
        <Task />
      </View>
    </>
  )
}
