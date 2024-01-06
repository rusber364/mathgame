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
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    // height: 'auto',
    width: '100%',
  },

  row: {
    margin: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    borderWidth: 3,
    borderStyle: 'dotted',
    borderColor: 'black',
    padding: 10,
    borderRadius: 20,
  },
})
