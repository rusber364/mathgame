import { Text } from 'react-native'

import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export function TeamScreen() {
  return (
    <Background>
      <Paper>
        <Text style={{ alignSelf: 'center' }}>TeamScreen</Text>
      </Paper>
    </Background>
  )
}
