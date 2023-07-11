import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function TopSinglePlayerScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>TopSinglePlayer</Text>
      </Paper>
    </Background>
  )
}
