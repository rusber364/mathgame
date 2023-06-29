import { NavigationAchievement } from '~/components/navigation/NavigationAchievementScreen'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'

export function AchievementScreen() {
  return (
    <Background>
      <Paper>
        <NavigationAchievement />
      </Paper>
    </Background>
  )
}
