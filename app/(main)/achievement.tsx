import { AchievementNavigation } from '~/components/navigation/AchievementNavigation'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export default function AchievementScreen() {
  return (
    <Background>
      <Paper>
        <AchievementNavigation />
      </Paper>
    </Background>
  )
}
