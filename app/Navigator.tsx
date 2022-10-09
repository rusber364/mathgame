import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { RoutesList } from './types/RouteList'
import { HomeScreen } from './screens/main/HomeScreen'
import { GameModeScreen } from './screens/main/GameModeScreen'
import { TeamScreen } from './screens/main/TeamScreen'
import { AchievementScreen } from './screens/main/AchievementScreen'
import { LeagueScreen } from './screens/main/LeagueScreen'
import { StoreModeScreen } from './screens/game/StoreModeScreen'
import { SurvivalModeScreen } from './screens/game/SurvivalModeScreen'
import { KnowledgeScreen } from './screens/game/KnowledgeScreen'
import { AchievementsSingleScreen } from './screens/achievements/AchievementsSingleScreen'
import { AchievementsTeamScreen } from './screens/achievements/AchievementsTeamScreen'
import { BonusScreen } from './screens/achievements/BonusScreen'
import { TopSinglePlayerScreen } from './screens/league/TopSinglePlayerScreen'
import { TopTeamScreen } from './screens/league/TopTeamScreen'
import { SingleTournamentScreen } from './screens/league/SingleTournamentScreen'
import { TeamTournamentScreen } from './screens/league/TeamTournamentScreen'
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
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="SingleAchievements" component={AchievementsSingleScreen} />
        <Stack.Screen name="TeamAchievements" component={AchievementsTeamScreen} />
        <Stack.Screen name="Bonuses" component={BonusScreen} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="SingleTournament" component={SingleTournamentScreen} />
        <Stack.Screen name="TeamTournament" component={TeamTournamentScreen} />
        <Stack.Screen name="TopSinglePlayer" component={TopSinglePlayerScreen} />
        <Stack.Screen name="TopTeam" component={TopTeamScreen} />
      </Stack.Group>

      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="Achievement" component={AchievementScreen} />
      <Stack.Screen name="League" component={LeagueScreen} />
    </Stack.Navigator>
  )
}
