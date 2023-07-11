import { NavigationGameMode } from '~/components/navigation/NavigationGameMode'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function GameModeScreen() {
  return (
    <Background>
      <Paper>
        <NavigationGameMode />
      </Paper>
    </Background>
  )
}
