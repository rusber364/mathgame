import { Link } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/common/button'
import { NavigateContainer } from '~/components/common/navigate-container'

export function AchievementNavigation() {
  const { t } = useTranslation()

  return (
    <NavigateContainer>
      <Link asChild href="/achievements-single">
        <Button>{t('screens.achievements.singleAchievements')}</Button>
      </Link>
      <Link asChild href="/achievements-team">
        <Button>{t('screens.achievements.teamAchievements')}</Button>
      </Link>
      <Link asChild href="/bonus">
        <Button>{t('screens.achievements.bonuses')}</Button>
      </Link>
    </NavigateContainer>
  )
}
