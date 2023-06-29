import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export function AchievementsTeamScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>TeamAchievements</Text>
      </Paper>
    </Background>
  )
}
