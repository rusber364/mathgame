import { MainMenuNavigation } from '~/components/navigation/MainMenuNavigation'
import { Profile } from '~/features/auth/components/Profile'

export default function HomeScreen() {
  return (
    <>
      <Profile />
      <MainMenuNavigation />
    </>
  )
}
