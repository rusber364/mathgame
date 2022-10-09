import { View, Text, StyleSheet } from 'react-native'

import { Task } from '../../components/Task'
import { Paper } from '../../layout/Paper'
import { useTaskStore } from '../../components/store/useTaskStore'

function Timer() {
  const { time } = useTaskStore()

  return <Text style={style.text}>Time: {time < 100 ? 0 : time}</Text>
}

export function SurvivalModeScreen() {
  const { score } = useTaskStore()

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={style.text}>Score: {score}</Text>
        <Timer />
      </View>
      <Paper>
        <Task />
      </Paper>
    </>
  )
}

const style = StyleSheet.create({
  text: {
    borderWidth: 1,
    fontSize: 20,
    padding: 5,
  },
})
