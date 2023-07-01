import { useEffect, useRef, type PropsWithChildren } from 'react'
import { Animated, Easing } from 'react-native'

type Props = {
  style?: any
}

export function FlasherView({ children, style }: PropsWithChildren<Props>) {
  const colorAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    )

    animation.start()

    return () => {
      animation.stop()
    }
  }, [colorAnimation])

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'white'],
  })

  return <Animated.View style={[style.circle, { backgroundColor }]}>{children}</Animated.View>
}
