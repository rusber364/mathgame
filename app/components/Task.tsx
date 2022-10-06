import { Text, View, StyleSheet } from 'react-native'
import { useTaskListContext } from '../context/useContextListTask'

type Props = {
  operandLeft: number
  operandRight: number
  operator: string
  answers: number[]
  id: string
}

export function Task(props: Props) {
  const { answers, operandLeft, operator, operandRight, id } = props
  const { checkedValues, setCheckedValues } = useTaskListContext()

  const handleSetAnswer = (variant: number) => () => {
    if (Number.isFinite(variant)) {
      setCheckedValues((state) => ({ ...state, [id]: variant }))
    }
  }

  return (
    <View>
      <Text style={style.operation}>
        {operandLeft} {operator} {operandRight} = {checkedValues[id] ?? '?'}
      </Text>

      <View style={style.answersContainer}>
        {answers.map((variant, idx) => (
          <Text style={style.answer} key={idx} onPress={handleSetAnswer(variant)}>
            {variant}
          </Text>
        ))}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  operation: {
    fontSize: 30,
  },
  answersContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  answer: {
    marginLeft: -1,
    padding: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
  },
})
