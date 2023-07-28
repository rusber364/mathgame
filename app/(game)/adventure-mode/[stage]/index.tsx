import { useLocalSearchParams, Stack } from 'expo-router'
import { useEffect } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'

import { useGameSelector, useGameDispatch } from '~/store/redux'
import { getStageLoading, registerStage } from '~/store/slices/task.slice'
import { TemplateList } from '~/features/game/components/template-list'

export default function StageScreen() {
  const { stage = '1' } = useLocalSearchParams<{ stage: string }>()
  const stageLoading = useGameSelector(getStageLoading)
  const dispatch = useGameDispatch()

  useEffect(() => {
    dispatch(registerStage(Number(stage)))
  }, [dispatch, stage])

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Adventure: stage ${stage}` }} />
      <>
        {stageLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView>
            <TemplateList stage={stage} />
          </ScrollView>
        )}
      </>
    </>
  )
}
