import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function BonusScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>Bonuses</Text>
      </Paper>
    </Background>
  )
}
