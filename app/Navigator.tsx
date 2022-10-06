import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { RoutesList } from './types/RouteList'
import { HomeScreen } from './screens/HomeScreen'
import { GameModeScreen } from './screens/GameModeScreen'
import { TeamScreen } from './screens/TeamScreen'
import { AchievementScreen } from './screens/AchievementScreen'
import { LeagueScreen } from './screens/LeagueScreen'
import { StoreModeScreen } from './screens/ScreenInGameMode/StoreModeScreen'
import { SurvivalModeScreen } from './screens/ScreenInGameMode/SurvivalModeScreen'
import { KnowledgeScreen } from './screens/ScreenInGameMode/KnowledgeScreen'
import { CheckScreen } from './screens/ScreenInGameMode/Check'
import { AchievementsSingleScreen } from './screens/AchievementsScreen/AchievementsSingleScreen'
import { AchievementsTeamScreen } from './screens/AchievementsScreen/AchievementsTeamScreen'
import { BonusScreen } from './screens/AchievementsScreen/BonusScreen'
import { Profile } from './components/Profile'
import { OptionModal } from './components/OptionModal'

const Stack = createNativeStackNavigator<RoutesList>()

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="GameMode" component={GameModeScreen} />
      <Stack.Group>
        <Stack.Screen name="StoreMode" component={StoreModeScreen} />
        <Stack.Screen name="SurvivalMode" component={SurvivalModeScreen} />
        <Stack.Screen name="Knowledge" component={KnowledgeScreen} />
        <Stack.Screen name="Check" component={CheckScreen} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="SingleAchievements" component={AchievementsSingleScreen} />
        <Stack.Screen name="TeamAchievements" component={AchievementsTeamScreen} />
        <Stack.Screen name="Bonuses" component={BonusScreen} />
      </Stack.Group>

      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="Achievement" component={AchievementScreen} />
      <Stack.Screen name="League" component={LeagueScreen} />
    </Stack.Navigator>
  )
}
