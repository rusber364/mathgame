import { Text, StyleSheet, Pressable, PressableProps } from 'react-native'
import { View } from 'react-native'

type Props = PressableProps & React.RefAttributes<View> & React.PropsWithChildren

export function Button(props: Props) {
  const { children, ...othersProps } = props

  return (
    <Pressable {...othersProps} style={style.button}>
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
