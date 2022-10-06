import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import type { RoutesList } from '../../types/RouteList'
import { useTaskListContext } from '../../context/useContextListTask'
import { Task } from '../../components/Task'
import { Paper } from '../../layout/Paper'
import { Button } from '../../components/common/Button'

export function SurvivalModeScreen() {
  const { tasks } = useTaskListContext()
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  const handleCheck = () => navigation.navigate('Check')

  return (
    <Paper>
      <View>
        <View>
          {tasks.map((task) => (
            <Task key={task.id} {...task}></Task>
          ))}
        </View>
        <Button onPress={handleCheck}>Check</Button>
      </View>
    </Paper>
  )
}
