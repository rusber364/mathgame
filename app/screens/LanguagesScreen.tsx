import { useCallback } from 'react'
import { View, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native'
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
    <SafeAreaView style={styles.root}>
      <FlatList
        style={styles.listLang}
        data={languageKeys}
        renderItem={(lang) => (
          <View style={styles.lang}>
            <Button onPress={handleChangeLang(lang.item)}>{lang.item}</Button>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: StatusBar.currentHeight || 0,
  },
  listLang: {
    paddingHorizontal: 10,
  },
  lang: {
    flexGrow: 1,
    flexBasis: '40%',
    marginHorizontal: 10,
  },
})
