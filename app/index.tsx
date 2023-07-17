import { MainMenuNavigation } from '~/components/navigation/MainMenuNavigation'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'
import { Profile } from '~/features/auth/components/Profile'

export default function HomeScreen() {
  return (
    <Background>
      <Profile />
      <Paper>
        <MainMenuNavigation />
      </Paper>
    </Background>
  )
}
