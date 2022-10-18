import { NavigationMainMenu } from '../../components/navigation/NavigationMainMenu'
import { Background } from '../../layout/Background'
import { Paper } from '../../layout/Paper'
import { DevMenu } from '../../components/DevMenu'

export function HomeScreen() {
  return (
    <Background>
      <Paper>
        <NavigationMainMenu />
        <DevMenu />
      </Paper>
    </Background>
  )
}
