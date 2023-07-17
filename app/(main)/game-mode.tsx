import { GameNavigation } from '~/components/navigation/GameNavigation'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function GameModeScreen() {
  return (
    <Background>
      <Paper>
        <GameNavigation />
      </Paper>
    </Background>
  )
}
