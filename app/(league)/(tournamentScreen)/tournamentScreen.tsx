/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const arr = [
  { digits: 1, name: '', reward: { attempt: 1 } },
  { digits: 1, name: 'First Day', reward: { attempt: 2 } },
  { digits: 2, name: 'Second Day', reward: { attempt: 3 } },
  { digits: 3, name: '30 Right Answers', reward: { attempt: 4 } },
  { digits: 4, name: 'Third days strict', reward: { attempt: 5 } },
  { digits: 5, name: '50 Right Answers strict', reward: { attempt: 6 } },
]
export default function Tournament() {
  const [rewards, setRewards] = useState(arr)

  return (
    <View>
      <View>
        <Text>Single Achievements</Text>
      </View>
      <View>
        {rewards.map((reward) => (
          <>
            <View>
              <Text>{reward.digits}</Text>
            </View>
            <View>
              <Text>{reward.name}</Text>
            </View>
            <View>
              <Text>{reward.reward.attempt}</Text>
            </View>
          </>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
