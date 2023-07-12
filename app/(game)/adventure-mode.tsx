import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function AdventureModeScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>AdventureMode</Text>
      </Paper>
    </Background>
  )
}
