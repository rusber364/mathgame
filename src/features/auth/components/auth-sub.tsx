import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

type Props = {
  textCaption: string
}

export function AuthSub({ textCaption, children }: React.PropsWithChildren<Props>) {
  return (
    <>
      <View style={styles.container}>
        <Text>{textCaption}</Text>
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
  },
})
