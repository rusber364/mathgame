import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function TopTeamScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>TopTeam</Text>
      </Paper>
    </Background>
  )
}
