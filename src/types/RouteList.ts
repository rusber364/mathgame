import type { RoutesParamList } from './RoutesParamList'
import type { RoutesParamListGameMode } from './RoutesParamListGameMode'
import type { RoutesParamListAchievements } from './RoutesParamListAchievements'
import type { RoutesParamListLeague } from './RoutesParamListLeague'
import type { RoutesParamAuth } from './RoutesParamAuth'
import type { RoutesParamLanguages } from './RoutesParamLanguages'

export type RoutesList = RoutesParamList &
  RoutesParamListGameMode &
  RoutesParamListAchievements &
  RoutesParamListLeague &
  RoutesParamAuth &
  RoutesParamLanguages
