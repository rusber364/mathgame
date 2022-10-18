import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RoutesList } from '../../types/RouteList'
import { View } from 'react-native'
import { Button } from '../common/Button'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

export function NavigationMainMenu() {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigateToTeam = () => navigation.navigate('Team')
  const navigateToGameMode = () => navigation.navigate('GameMode')
  const navigateToAchievement = () => navigation.navigate('Achievement')
  const navigateToLeague = () => navigation.navigate('League')
  const navigateToOption = () => navigation.navigate('Option')
  const navigateToProfile = () => navigation.navigate('Profile')
  const navigateToPurchase = () => navigation.navigate('Purchase')

  return (
    <View>
      <Button onPress={navigateToGameMode}>{t('screens.main.game')}</Button>
      <Button onPress={navigateToTeam}>{t('screens.main.team')}</Button>
      <Button onPress={navigateToAchievement}>{t('screens.main.achievements')}</Button>
      <Button onPress={navigateToLeague}>{t('screens.main.league')}</Button>
      <Button onPress={navigateToOption}>Option</Button>
      <Button onPress={navigateToProfile}>Profile</Button>
      <Button onPress={navigateToPurchase}>Purchase</Button>
    </View>
  )
}
