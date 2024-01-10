import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const arr = [
  { digits: 1, name: 'Set up your account', reward: { attempt: 1 } },
  { digits: 2, name: 'First Day', reward: { attempt: 2 } },
  { digits: 3, name: 'Second Day', reward: { attempt: 2 } },
  { digits: 4, name: '30 Right Answers', reward: { attempt: 2 } },
  { digits: 5, name: 'Third days strict', reward: { attempt: 2 } },
  { digits: 6, name: '50 Right Answers strict', reward: { attempt: 2 } },
]

export default function Tournament() {
  const [rewards] = useState(arr)

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text1}>Single Achievements</Text>
      </View>

      <View style={styles.container1}>
        {rewards.map((reward, idx) => (
          <View key={idx}>
            <View style={styles.container2}>
              <View style={styles.firstColum}>
                <Text style={styles.text2}>{reward.digits}</Text>
              </View>

              <View style={styles.secondColum}>
                <Text style={styles.text2}> {reward.name}</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.thirdColum}>
                  <Text style={styles.text2}>{reward.reward.attempt}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
  container1: {
    padding: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: 'auto',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  container2: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: 'auto',
    margin: 5,
  },
  firstColum: {
    width: 'auto',
    borderStyle: 'dashed',
    borderWidth: 3,
    flexGrow: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#978',
  },
  secondColum: {
    width: 'auto',
    marginLeft: -2,
    marginRight: -2,
    borderStyle: 'dashed',
    borderWidth: 3,
    flexGrow: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  thirdColum: {
    width: 'auto',
    borderStyle: 'dashed',
    borderWidth: 3,
    flexGrow: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#976',
  },
  text1: {
    margin: 10,
    position: 'relative',
    fontSize: 20,
    fontWeight: '700',
  },
  text2: {
    fontSize: 18,
  },
})
