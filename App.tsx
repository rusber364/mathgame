import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFlipper } from '@react-navigation/devtools'

import type { RoutesParamList } from './app/types/RoutesParamList'
import { HomeScreen } from './app/screens/HomeScreen'
import { GameModeScreen } from './app/screens/GameModeScreen'
import { TeamScreen } from './app/screens/TeamScreen'
import { AchievementScreen } from './app/screens/AchievementScreen'
import { LeaguaeScreen } from './app/screens/LeaguageScreen'
import { OptionModal } from './app/components/OptionModal'
import { Profile } from './app/components/Profile'

const Stack = createNativeStackNavigator<RoutesParamList>()

export default function App() {
  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameMode" component={GameModeScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="Achievement" component={AchievementScreen} />
        <Stack.Screen name="Leaguae" component={LeaguaeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
