import { Text, StyleSheet, Pressable, PressableProps, ActivityIndicator } from 'react-native'
import { View } from 'react-native'

type Props = PressableProps &
  React.RefAttributes<View> &
  React.PropsWithChildren & {
    isLoading?: boolean
  }

export function Button(props: Props) {
  const { children, isLoading, style: outStyle, ...othersProps } = props

  return (
    <Pressable {...othersProps} style={[style.button, typeof outStyle !== 'function' && outStyle]}>
      <View style={{ flexDirection: 'row' }}>
        {isLoading && <ActivityIndicator style={style.indicator} color="#fff" />}
        <Text style={style.text}>{children}</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: 'rgba(33, 150, 243, 0.8)',
    marginBottom: 10,
    shadowColor: '#000',
    borderRadius: 300,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  indicator: {
    position: 'absolute',
    top: 1,
    left: -25,
  },
})
