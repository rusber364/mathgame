import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function AchievementsSingleScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>SingleAchievements</Text>
      </Paper>
    </Background>
  )
}
