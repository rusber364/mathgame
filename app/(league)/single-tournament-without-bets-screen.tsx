import { Button, StyleSheet, Text, View } from 'react-native'

export default function SingleTournamenWithoutBetstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: '900' }}>Single Tournament Without Bets</Text>
      </View>
      <View style={styles.row}>
        <Button title="Rang Game" />
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>Choose Your Game</Text>
      </View>
      <View style={styles.row}>
        <Button title="Free Game" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },

  row: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
  text1: {
    borderColor: 'black',
    borderRadius: 20,
    borderStyle: 'dotted',
    borderWidth: 3,
    fontSize: 20,
    padding: 10,
  },
})
