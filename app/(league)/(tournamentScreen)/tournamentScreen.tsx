import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
                    <View key={reward.digits}>
                        <Text>{reward.digits}</Text>
                    </View>
                    <View key={reward.name}>
                        <Text>{reward.name}</Text>
                    </View>
                    <View key={reward.reward}> 
                    <Text>{reward.reward.attempt}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({})
