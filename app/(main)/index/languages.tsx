import { useCallback } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'expo-router'

import { Button } from '~/components/common/button.comp'
import { languageKeys } from '~/langs/translation'
import { countriesNames } from '~/langs/countries'

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
