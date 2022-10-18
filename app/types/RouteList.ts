import { RoutesParamList } from './RoutesParamList'
import { RoutesParamListGameMode } from './RoutesParamListGameMode'
import { RoutesParamListAchievements } from './RoutesParamListAchievements'
import { RoutesParamListLeague } from './RoutesParamListLeague'
import type { TAuthParams } from './Auth.types'

export type RoutesList = RoutesParamList &
  RoutesParamListGameMode &
  RoutesParamListAchievements &
  RoutesParamListLeague &
  TAuthParams
