import { View, Text, StyleSheet } from 'react-native'
import { storeAnswers } from '../../core/generationTask'
import { useTaskListContext } from '../../context/useContextListTask'
import { Paper } from '../../layout/Paper'

export function CheckScreen() {
  const { tasks, checkedValues } = useTaskListContext()

  return (
    <Paper>
      <View style={style.tasksContainer}>
        {tasks.map((task) => {
          const isValid = storeAnswers[task.id] == checkedValues[task.id]
          return (
            <View
              key={task.id}
              style={{
                ...style.task,
                backgroundColor: isValid ? 'green' : 'red',
              }}
            >
              <Text style={style.text}>
                {task.operandLeft} {task.operator} {task.operandRight}
              </Text>
              <Text style={style.text}>{isValid ? 'Y' : 'N'}</Text>
            </View>
          )
        })}
      </View>
    </Paper>
  )
}

const style = StyleSheet.create({
  tasksContainer: {
    alignSelf: 'stretch',
  },
  task: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
})
