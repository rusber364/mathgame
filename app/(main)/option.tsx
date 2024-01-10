import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function OptionScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'center' }}>Option</Text>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.dark}>
          <Text>1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.volume}>
          <Text>2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.light}>
          <Text>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 128, 0, 0.3)',
    height: '100%',
    width: '100%',
  },
  dark: {
    backgroundColor: 'rgba(0, 178, 0, 0.2)',
    height: '100%',
    width: '100%',
    ...Platform.select({
      web: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 75% 50%, 25% 50%, 0% 100%)',
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    backgroundColor: 'rgba(0, 278, 0, 0.2)',
    height: '100%',
    width: '100%',
    ...Platform.select({
      web: {
        clipPath: 'polygon(25% 50%, 75% 50%, 100% 0, 100% 100%, 0 100%, 0 0)',
      },
    }),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  touch: {
    alignContent: 'center',
    alignItems: 'center',
    height: '33%',
    justifyContent: 'center',
    width: '100%',
  },
  volume: {
    backgroundColor: 'rgba(100, 278, 0, 0.2)',
    height: '100%',
    width: '100%',
    ...Platform.select({
      web: {
        clipPath: 'polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
