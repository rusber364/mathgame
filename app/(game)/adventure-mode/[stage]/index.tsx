import { Stack, useLocalSearchParams } from 'expo-router'
import { useEffect, useMemo } from 'react'
import { ActivityIndicator } from 'react-native'

import { NavigationBack } from '~/components/common/navigation-back'
import { HeaderRightContent } from '~/components/common/temp/header-right-content'
import { TemplateList } from '~/features/game/components/template-list'
import { range } from '~/features/game/utils/range'
import { useGameDispatch, useGameSelector } from '~/store/redux'
import { getStageLoading, registerStage } from '~/store/slices/task.slice'

export default function StageScreen() {
  const { stage = '1' } = useLocalSearchParams<{ stage: string }>()
  const stageLoading = useGameSelector(getStageLoading)
  const levels = useMemo(() => range(1, 18), [])
  const dispatch = useGameDispatch()

  useEffect(() => {
    dispatch(registerStage(Number(stage)))
  }, [dispatch, stage])

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerLeft: NavigationBack,
          headerRight: HeaderRightContent,
        }}
      />

      {stageLoading ? <ActivityIndicator size="large" /> : <TemplateList stage={stage} levels={levels} />}
    </>
  )
}
