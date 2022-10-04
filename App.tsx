import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFlipper } from '@react-navigation/devtools'

import type { RoutesList } from './app/types/RouteList'
import { HomeScreen } from './app/screens/HomeScreen'
import { GameModeScreen } from './app/screens/GameModeScreen'
import { TeamScreen } from './app/screens/TeamScreen'
import { AchievementScreen } from './app/screens/AchievementScreen'
import { LeagueScreen } from './app/screens/LeagueScreen'
import { OptionModal } from './app/components/OptionModal'
import { Profile } from './app/components/Profile'
import { StoreModeScreen } from './app/screens/ScreenInGameMode/StoreModeScreen'
import { SurvivalModeScreen } from './app/screens/ScreenInGameMode/SurvivalModeScreen'
import { KnowledgeScreen } from './app/screens/ScreenInGameMode/KnowledgeScreen'

export const Stack = createNativeStackNavigator<RoutesList>()

export default function App() {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StoreMode" component={StoreModeScreen} />
        <Stack.Screen name="SurvivalMode" component={SurvivalModeScreen} />
        <Stack.Screen name="Knowledge" component={KnowledgeScreen} />
        <Stack.Screen name="GameMode" component={GameModeScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="Achievement" component={AchievementScreen} />
        <Stack.Screen name="League" component={LeagueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
