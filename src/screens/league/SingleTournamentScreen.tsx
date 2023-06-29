import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export function SingleTournamentScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>SingleTournament</Text>
      </Paper>
    </Background>
  )
}