import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const bonuses = [
  { id: 0, Bonus: { attempts: 1 } },
  { id: 1, Bonus: { time: 30 } },
  { id: 2, Bonus: { time: 30 } },
  { id: 3, Bonus: { attempts: 1 } },
  { id: 4, Bonus: { attempts: 1 } },
  { id: 5, Bonus: { time: 30 } },
  { id: 6, Bonus: { time: 30 } },
  { id: 7, Bonus: { time: 30 } },
  { id: 8, Bonus: { attempts: 1 } },
  { id: 0, Bonus: { attempts: 1 } },
  { id: 1, Bonus: { time: 30 } },
  { id: 2, Bonus: { time: 30 } },
  { id: 3, Bonus: { attempts: 1 } },
  { id: 4, Bonus: { attempts: 1 } },
  { id: 5, Bonus: { time: 30 } },
  { id: 6, Bonus: { time: 30 } },
  { id: 7, Bonus: { time: 30 } },
  { id: 8, Bonus: { attempts: 1 } },
  { id: 0, Bonus: { attempts: 1 } },
  { id: 1, Bonus: { time: 30 } },
  { id: 2, Bonus: { time: 30 } },
  { id: 3, Bonus: { attempts: 1 } },
  { id: 4, Bonus: { attempts: 1 } },
  { id: 5, Bonus: { time: 30 } },
  { id: 6, Bonus: { time: 30 } },
  { id: 7, Bonus: { time: 30 } },
  { id: 8, Bonus: { attempts: 1 } },
]

export default function BonusScreen() {
  const [bonus] = useState(bonuses)

  return (
    <View style={styles.container1}>
      <View style={styles.bonus}>
        <Text style={styles.text0}>Bonuses</Text>
      </View>
      <View style={styles.container2}>
        {bonus.map((bon, idx) => (
          <View key={idx}>
            <TouchableOpacity>
              <View key={bon.id} style={{}}>
                <Text style={styles.item}>
                  {bon.Bonus.attempts}
                  {bon.Bonus.time}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    height: 'auto',
  },
  container2: {
    borderStyle: 'solid',
    borderWidth: 3,
    width: 'auto',
    margin: 10,
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 20,
  },
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 15,
    padding: 15,
    height: 100,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
  },
  text0: {
    fontSize: 20,
    fontWeight: '800',
  },
  bonus: {
    margin: 20,
    borderStyle: 'dotted',
    borderWidth: 4,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 20,
    backgroundColor: 'white',
  },
})
