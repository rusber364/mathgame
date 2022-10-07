import { RoutesParamList } from './RoutesParamList'
import { RoutesParamListGameMode } from './RoutesParamListGameMode'
import { RoutesParamListAchievements } from './RoutesParamListAchievements'
import { RoutesParamListLeague } from './RoutesParamListLeague'

export type RoutesList = RoutesParamList & RoutesParamListGameMode & RoutesParamListAchievements & RoutesParamListLeague
