import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { RoutesList } from './types/RouteList'

import { HomeScreen } from '../app/(main)/home'
import { GameModeScreen } from '../app/(main)/game-mode'
import { TeamScreen } from '../app/(main)/team'
import { AchievementScreen } from '../app/(main)/achievement'
import { LeagueScreen } from '../app/(main)/league'
import { OptionScreen } from '../app/(main)/option'
import { ProfileScreen } from '../app/(main)/profile'
import { PurchaseScreen } from '../app/(main)/purchase'

import { StoreModeScreen } from '../app/(game)/store-mode'
import { SurvivalModeScreen } from '../app/(game)/survival-mode'
import { KnowledgeScreen } from '../app/(game)/knowledge'

import { AchievementsSingleScreen } from '../app/(achievements)/achievements-single'
import { AchievementsTeamScreen } from '../app/(achievements)/achievements-team'
import { BonusScreen } from '../app/(achievements)/bonus'

import { TopSinglePlayerScreen } from '../app/(league)/top-single-player'
import { TopTeamScreen } from '../app/(league)/top-team'
import { SingleTournamentScreen } from '../app/(league)/single-tournament'
import { TeamTournamentScreen } from '../app/(league)/team-tournament'

import { useAuthContext } from './features/auth/context/AuthProvider'
import { SignInScreen } from '../app/(auth)/sign-in'
import { SignUpScreen } from '../app/(auth)/sign-up'
import { LanguagesScreen } from '../app/languages'

const Stack = createNativeStackNavigator<RoutesList>()

export function Navigator() {
  const { isAuth } = useAuthContext()

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Languages" component={LanguagesScreen} />

      {isAuth ? (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}

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
      <Stack.Screen name="Option" component={OptionScreen} />
      <Stack.Screen name="Purchase" component={PurchaseScreen} />
    </Stack.Navigator>
  )
}
