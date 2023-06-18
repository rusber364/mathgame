import { useCallback } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/common/Button'
import { languageKeys } from '../langs/translation'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RoutesList } from '../types/RouteList'

export function LanguagesScreen() {
  const { i18n } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const handleChangeLang = useCallback(
    (lang: string) => () => {
      i18n.changeLanguage(lang)
      navigation.navigate('Home')
    },
    [i18n, navigation]
  )

  return (
    <ScrollView>
      <View style={styles.root}>
        {languageKeys.map((lang) => (
          <View key={lang} style={styles.lang}>
            <Button onPress={handleChangeLang(lang)}>{lang}</Button>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lang: {
    flexGrow: 1,
    flexBasis: '40%',
    marginHorizontal: 10,
  },
})
