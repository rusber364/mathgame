import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function TournamentTeamWithBets() {
  return (
    <>
      <View style={{ width: 'auto' }}>
        <View style={{ margin: 50, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '900' }}>Single Tournament With Bets </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.button}>
              <Button title="100" />
            </View>

            <View style={styles.button}>
              <Button title="200" />
            </View>
          </View>

          <View style={styles.text}>
            <TouchableOpacity>
              <Text style={styles.text1}>Your Own Bid</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.row}>
              <View style={styles.button}>
                <Button title="500" />
              </View>

              <View style={styles.button}>
                <Button title="1500" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 50,
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
  },

  row: {
    alignContent: 'stretch',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
  },
  text: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  text1: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 3,
    fontSize: 30,
    margin: 4,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    width: 'auto',
  },
})
