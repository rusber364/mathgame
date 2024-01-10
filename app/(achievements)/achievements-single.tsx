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
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 4,
    padding: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: 'auto',
  },
  container2: {
    alignContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: 'auto',
  },
  firstColum: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderWidth: 3,
    flexGrow: 0,
    justifyContent: 'center',
    padding: 10,
    width: 'auto',
  },
  secondColum: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderWidth: 3,
    flexGrow: 2,
    justifyContent: 'center',
    marginLeft: -2,
    marginRight: -2,
    padding: 10,
    width: 'auto',
  },
  text1: {
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
    position: 'relative',
  },
  text2: {
    fontSize: 18,
  },
  thirdColum: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderWidth: 3,
    flexGrow: 0,
    justifyContent: 'center',
    padding: 10,
    width: 'auto',
  },
})
