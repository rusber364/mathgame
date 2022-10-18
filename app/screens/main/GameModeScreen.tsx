import { NavigationGameMode } from '../../components/navigation/NavigationGameMode'
import { Background } from '../../layout/Background'
import { Paper } from '../../layout/Paper'

export function GameModeScreen() {
  return (
    <Background>
      <Paper>
        <NavigationGameMode />
      </Paper>
    </Background>
  )
}
