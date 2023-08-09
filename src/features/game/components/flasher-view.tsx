import { useEffect, useRef, type PropsWithChildren } from 'react'
import { Animated, Easing, StyleProp, TextStyle } from 'react-native'

type Props = {
  style?: StyleProp<TextStyle>
  duration?: number
  outputRange?: [string, string]
}

export function FlasherView({
  children,
  style,
  duration = 500,
  outputRange = ['red', 'white'],
}: PropsWithChildren<Props>) {
  const colorAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    )

    animation.start()

    return () => {
      animation.stop()
    }
  }, [colorAnimation, duration])

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange,
  })

  return <Animated.View style={[style, { backgroundColor }]}>{children}</Animated.View>
}
