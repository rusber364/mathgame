import { Link } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button.comp'
import { NavigateContainer } from '~/components/common/navigate-container'

export function GameNavigation() {
  const { t } = useTranslation()

  return (
    <NavigateContainer>
      <Link asChild href="/(game)/adventure-mode">
        <Button>{t('screens.gameMode.adventure')}</Button>
      </Link>
      <Link asChild href="/(game)/survival-mode">
        <Button>{t('screens.gameMode.survivalMode')}</Button>
      </Link>
      <Link asChild href="/(game)/knowledge">
        <Button>{t('screens.gameMode.knowledge')}</Button>
      </Link>
    </NavigateContainer>
  )
}
