import { useCallback } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'expo-router'

import { Button } from '~/components/common/Button'
import { languageKeys } from '~/langs/translation'

export default function LanguagesScreen() {
  const { i18n } = useTranslation()
  const router = useRouter()

  const handleChangeLang = useCallback(
    (lang: string) => () => {
      i18n.changeLanguage(lang)
      router.push('home')
    },
    [i18n, router],
  )

  return (
    <FlatList
      style={styles.listLang}
      data={languageKeys}
      renderItem={(lang) => <Button onPress={handleChangeLang(lang.item)}>{lang.item}</Button>}
    />
  )
}

const styles = StyleSheet.create({
  listLang: {
    padding: 15,
  },
})
