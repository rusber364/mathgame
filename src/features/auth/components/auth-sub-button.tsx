import { Href, useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

type Props = {
  href: Href<string>
  label: string
  textCaption: string
}

export default function AuthSubButton({ label, textCaption, href }: Props) {
  const router = useRouter()

  return (
    <>
      <View style={styles.container}>
        <Text>{textCaption}</Text>
        <Button onPress={() => router.push(href)}>{label}</Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
  },
})
