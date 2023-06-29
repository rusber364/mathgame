import React, { useEffect, useRef } from 'react'
import { View, Animated, Easing } from 'react-native'

const App = () => {
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

  const interpolatedColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'white'],
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: interpolatedColor,
        }}
      />
    </View>
  )
}

export default App
