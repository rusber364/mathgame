import { NavigationLeague } from '~/components/navigation/NavigationLeague'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export function LeagueScreen() {
  return (
    <Background>
      <Paper>
        <NavigationLeague />
      </Paper>
    </Background>
  )
}
