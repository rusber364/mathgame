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
  container: { height: '100%', width: '100%', backgroundColor: 'rgba(0, 128, 0, 0.3)' },
  dark: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 178, 0, 0.2)',
    ...Platform.select({
      web: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 75% 50%, 25% 50%, 0% 100%)',
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
  light: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 278, 0, 0.2)',
    ...Platform.select({
      web: {
        clipPath: 'polygon(25% 50%, 75% 50%, 100% 0, 100% 100%, 0 100%, 0 0)',
      },
    }),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  volume: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(100, 278, 0, 0.2)',
    ...Platform.select({
      web: {
        clipPath: 'polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
})
