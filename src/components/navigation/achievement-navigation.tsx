import { useTranslation } from 'react-i18next'

import { Link } from '~/components/common/link'
import { NavigateContainer } from '~/components/common/navigate-container'

export function AchievementNavigation() {
  const { t } = useTranslation()

  return (
    <NavigateContainer>
      <Link href="/achievements-single">{t('screens.achievements.singleAchievements')}</Link>
      <Link href="/achievements-team">{t('screens.achievements.teamAchievements')}</Link>
      <Link href="/bonus">{t('screens.achievements.bonuses')}</Link>
    </NavigateContainer>
  )
}
