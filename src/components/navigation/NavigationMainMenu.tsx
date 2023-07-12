import { View } from 'react-native'
import { Link } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/Button'

export function NavigationMainMenu() {
  const { t } = useTranslation()

  return (
    <View>
      <Link asChild href="game-mode">
        <Button>{t('screens.main.game')}</Button>
      </Link>

      <Link asChild href="team">
        <Button>{t('screens.main.team')}</Button>
      </Link>

      <Link asChild href="achievement">
        <Button>{t('screens.main.achievements')}</Button>
      </Link>

      <Link asChild href="league">
        <Button>{t('screens.main.league')}</Button>
      </Link>

      <Link asChild href="option">
        <Button>Option</Button>
      </Link>

      <Link asChild href="purchase">
        <Button>Purchase</Button>
      </Link>
    </View>
  )
}
