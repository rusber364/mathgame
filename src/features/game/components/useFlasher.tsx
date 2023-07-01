import { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

export function useFlasher() {
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

  return colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'white'],
  })
}
