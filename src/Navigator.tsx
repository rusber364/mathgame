import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { RoutesList } from './types/RouteList'

import HomeScreen from '../app/(main)/home'
import GameModeScreen from '../app/(main)/game-mode'
import TeamScreen from '../app/(main)/team'
import AchievementScreen from '../app/(main)/achievement'
import LeagueScreen from '../app/(main)/league'
import OptionScreen from '../app/(main)/option'
import ProfileScreen from '../app/(main)/profile'
import PurchaseScreen from '../app/(main)/purchase'

import StoreModeScreen from '../app/(game)/store-mode'
import SurvivalModeScreen from '../app/(game)/survival-mode'
import KnowledgeScreen from '../app/(game)/knowledge'

import AchievementsSingleScreen from '../app/(achievements)/achievements-single'
import AchievementsTeamScreen from '../app/(achievements)/achievements-team'
import BonusScreen from '../app/(achievements)/bonus'

import TopSinglePlayerScreen from '../app/(league)/top-single-player'
import TopTeamScreen from '../app/(league)/top-team'
import SingleTournamentScreen from '../app/(league)/single-tournament'
import TeamTournamentScreen from '../app/(league)/team-tournament'

import { useAuthContext } from './features/auth/context/AuthProvider'
import SignInScreen from '../app/(auth)/sign-in'
import SignUpScreen from '../app/(auth)/sign-up'
import LanguagesScreen from '../app/languages'

const Stack = createNativeStackNavigator<RoutesList>()

export function Navigator() {
  const { isAuth } = useAuthContext()

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="languages" component={LanguagesScreen} />

      {isAuth ? (
        <Stack.Screen name="profile" component={ProfileScreen} />
      ) : (
        <>
          <Stack.Screen name="sign-in" component={SignInScreen} />
          <Stack.Screen name="sign-up" component={SignUpScreen} />
        </>
      )}

      <Stack.Screen name="game-mode" component={GameModeScreen} />
      <Stack.Group>
        <Stack.Screen name="store-mode" component={StoreModeScreen} />
        <Stack.Screen name="survival-mode" component={SurvivalModeScreen} />
        <Stack.Screen name="knowledge" component={KnowledgeScreen} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="achievements-single" component={AchievementsSingleScreen} />
        <Stack.Screen name="achievements-team" component={AchievementsTeamScreen} />
        <Stack.Screen name="bonus" component={BonusScreen} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="single-tournament" component={SingleTournamentScreen} />
        <Stack.Screen name="team-tournament" component={TeamTournamentScreen} />
        <Stack.Screen name="top-single-player" component={TopSinglePlayerScreen} />
        <Stack.Screen name="top-team" component={TopTeamScreen} />
      </Stack.Group>

      <Stack.Screen name="team" component={TeamScreen} />
      <Stack.Screen name="achievement" component={AchievementScreen} />
      <Stack.Screen name="league" component={LeagueScreen} />
      <Stack.Screen name="option" component={OptionScreen} />
      <Stack.Screen name="purchase" component={PurchaseScreen} />
    </Stack.Navigator>
  )
}
