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
    backgroundColor: 'rgba(33, 150, 243, 0.8)',
    borderRadius: 300,
    elevation: 2,
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 32,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  indicator: {
    left: -25,
    position: 'absolute',
    top: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    lineHeight: 21,
  },
})
