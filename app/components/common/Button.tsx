import { Text, StyleSheet, Pressable } from 'react-native'
import { GestureResponderEvent } from 'react-native'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  onPress?: (event: GestureResponderEvent) => void
}

export function Button(props: Props) {
  const { children, onPress } = props

  return (
    <Pressable style={style.button} onPress={onPress}>
      <Text style={style.text}>{children}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(33, 150, 243)',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
