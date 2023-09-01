import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, StyleSheet } from 'react-native'

import { Button } from '~/components/common/button.comp'
import { countriesNames } from '~/langs/countries'
import { languageKeys } from '~/langs/translation'

export default function LanguagesScreen() {
  const { i18n } = useTranslation()
  const router = useRouter()

  const handleChangeLang = useCallback(
    (lang: string) => () => {
      i18n.changeLanguage(lang)
      router.back()
    },
    [i18n, router],
  )

  return (
    <FlatList
      testID="languages-screen-flat-list"
      style={styles.listLang}
      data={languageKeys}
      renderItem={(lang) => <Button onPress={handleChangeLang(lang.item)}>{countriesNames[lang.item]}</Button>}
    />
  )
}

const styles = StyleSheet.create({
  listLang: {
    padding: 15,
  },
})
