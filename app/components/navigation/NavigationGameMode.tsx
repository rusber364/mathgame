import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { RoutesList } from '../../types/RouteList'
import { Button } from '../common/Button'
import { Paper } from '../../layout/Paper'

export function NavigationGameMode() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const navigationToStoreMode = () => navigation?.navigate('StoreMode')
  const navigationToSurvivalMode = () => navigation?.navigate('SurvivalMode')
  const navigationToKnowledge = () => navigation?.navigate('Knowledge')

  return (
    <View style={style.nav}>
      <Button onPress={navigationToStoreMode}>StoreMode</Button>
      <Button onPress={navigationToSurvivalMode}>SurvivalMode</Button>
      <Button onPress={navigationToKnowledge}>Knowledge</Button>
    </View>
  )
}

const style = StyleSheet.create({
  nav: { alignSelf: 'stretch', paddingHorizontal: 15 },
})
