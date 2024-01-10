import { Link } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button.comp'
import { NavigateContainer } from '~/components/common/navigate-container'

export function MainMenuNavigation() {
  const { t } = useTranslation()

  return (
    <NavigateContainer>
      <Link asChild href="/game-mode">
        <Button>{t('screens.main.game')}</Button>
      </Link>
      <Link asChild href="/team">
        <Button>{t('screens.main.team')}</Button>
      </Link>
      <Link asChild href="/achievement">
        <Button>{t('screens.main.achievements')}</Button>
      </Link>
      <Link asChild href="/league">
        <Button>{t('screens.main.league')}</Button>
      </Link>
      <Link asChild href="/option">
        <Button>Option</Button>
      </Link>
      <Link asChild href="/purchase">
        <Button>Purchase</Button>
      </Link>
    </NavigateContainer>
  )
}
