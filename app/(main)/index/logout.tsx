import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { supabase } from '~/database/supabase'

export default function LogoutScreen() {
  const router = useRouter()

  useEffect(() => {
    async function redirectToHome() {
      const { error } = await supabase.auth.signOut()
      if (!error) {
        router.replace('/')
      }
    }

    redirectToHome()
  }, [router])

  return (
    <View style={styles.loader} testID="logout-screen">
      <ActivityIndicator size="large" testID="logout-activity-indicator" />
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    height: '100%',
    justifyContent: 'center',
  },
})
