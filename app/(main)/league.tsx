import { LeagueNavigation } from '~/components/navigation/LeagueNavigation'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function LeagueScreen() {
  return (
    <Background>
      <Paper>
        <LeagueNavigation />
      </Paper>
    </Background>
  )
}
