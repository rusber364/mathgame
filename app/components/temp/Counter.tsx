import { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <View style={styles.root}>
      <Text>{count}</Text>
      <Button onPress={increment} title="+1" />
      <Button onPress={decrement} title="-1" />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {},
})
