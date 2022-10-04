import { Navigation } from '../components/NavigationMainMenu'
import { Paper } from '../layout/Paper'

export function HomeScreen({ navigation }) {
  return (
    <Paper>
      <Navigation navigation={navigation} />
    </Paper>
  )
}
