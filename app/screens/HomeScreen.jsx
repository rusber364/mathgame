import { Navigation } from '../components/Navigation'
import { Paper } from '../layout/Paper'

export function HomeScreen({ navigation }) {
  return (
    <Paper>
      <Navigation navigation={navigation} />
    </Paper>
  )
}
