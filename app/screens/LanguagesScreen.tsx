import { useCallback } from 'react'
import { View, ScrollView, StyleSheet, FlatList } from 'react-native'
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
    <View style={styles.root}>
      <FlatList
        data={languageKeys}
        renderItem={(lang) => (
          <View key={lang.index} style={styles.lang}>
            <Button onPress={handleChangeLang(lang.item)}>{lang.item}</Button>
          </View>
        )}
      />
    </View>
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
