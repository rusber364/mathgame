import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { NavigationMainMenu } from '../../components/navigation/NavigationMainMenu'
import { Paper } from '../../layout/Paper'

export function HomeScreen() {
  const { i18n } = useTranslation()

  return (
    <Paper>
      <NavigationMainMenu />
      <View style={{ alignSelf: 'auto', flexDirection: 'row', margin: 5 }}>
        <View style={{ margin: 10 }}>
          <Button onPress={() => i18n.changeLanguage('en')}>EN</Button>
        </View>
        <View style={{ margin: 10 }}>
          <Button onPress={() => i18n.changeLanguage('ru')}>RU</Button>
        </View>
      </View>
    </Paper>
  )
}
