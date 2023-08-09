import { MainMenuNavigation } from '~/components/navigation/main-menu-navigation'
import { Profile } from '~/features/auth/components/profile'

export default function HomeScreen() {
  return (
    <>
      <Profile />
      <MainMenuNavigation />
    </>
  )
}
