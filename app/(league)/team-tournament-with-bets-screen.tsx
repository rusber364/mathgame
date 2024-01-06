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
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
  },
  row: {
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  button: {
    margin: 50,
    marginLeft: 20,
    marginRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
  },
  text: {
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  text1: {
    fontSize: 30,
    borderStyle: 'dashed',
    borderWidth: 3,
    margin: 4,
    borderRadius: 10,
    width: 'auto',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'white',
  },
})
