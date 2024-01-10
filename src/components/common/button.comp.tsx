import { forwardRef, type Ref } from 'react'
import type { PressableProps, StyleProp, ViewStyle } from 'react-native'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'

export type NativeProps<T> = PressableProps & React.RefAttributes<View> & React.PropsWithChildren<T>
export type Props = {
  isLoading?: boolean
  style?: StyleProp<ViewStyle>
}

function ButtonBase(props: NativeProps<Props>, ref: Ref<View>) {
  const { children, isLoading, style: outStyle, ...othersProps } = props

  return (
    <Pressable {...othersProps} style={[style.button, outStyle]} ref={ref}>
      <View style={{ flexDirection: 'row' }}>
        {isLoading && <ActivityIndicator style={style.indicator} color="#fff" />}
        <Text style={style.text}>{children}</Text>
      </View>
    </Pressable>
  )
}

export const Button = forwardRef<View, NativeProps<Props>>(ButtonBase)

export const style = StyleSheet.create({
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
