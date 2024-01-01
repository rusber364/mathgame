import { Stack } from 'expo-router'

import { StageList } from '~/features/game/components/stage-list'

export default function StagesScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Adventure: stage list' }} />
      <StageList />
    </>
  )
}
