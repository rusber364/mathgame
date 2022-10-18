import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/common/Button'

export function DevMenu() {
  const { i18n } = useTranslation()

  return (
    <View style={{ alignSelf: 'center', flexDirection: 'row', margin: 5 }}>
      <View style={{ margin: 10 }}>
        <Button onPress={() => i18n.changeLanguage('en')}>EN</Button>
      </View>
      <View style={{ margin: 10 }}>
        <Button onPress={() => i18n.changeLanguage('ru')}>RU</Button>
      </View>
    </View>
  )
}
