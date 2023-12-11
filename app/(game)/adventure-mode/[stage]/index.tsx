import { Stack, useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { HeaderRightContent } from '~/components/common/temp/header-right-content'
import { TemplateList } from '~/features/game/components/template-list'
import { range } from '~/features/game/utils/range'
import { useGameDispatch, useGameSelector } from '~/store/redux'
import { getStageLoading, registerStage } from '~/store/slices/task.slice'

const levels = range(1, 18)

export default function StageScreen() {
  const { stage = '1' } = useLocalSearchParams<{ stage: string }>()
  const stageLoading = useGameSelector(getStageLoading)
  const dispatch = useGameDispatch()

  useEffect(() => {
    dispatch(registerStage(Number(stage)))
  }, [dispatch, stage])

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerRight: HeaderRightContent,
        }}
      />

      {stageLoading ? <ActivityIndicator size="large" /> : <TemplateList stage={stage} levels={levels} />}
    </>
  )
}
