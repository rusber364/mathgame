import { Text, View, StyleSheet } from 'react-native'
import { Button } from '../../../components/common/Button'
import { useGameContext } from '../context/GameProvider'

export function Task() {
  const { checkAnswer, currentTask, game } = useGameContext()

  const buttons = (
    <View>
      {game.isOver ? (
        <Button disabled onPress={game.reset}>
          Game Over
        </Button>
      ) : (
        <Button onPress={game.isStarted ? game.pause : game.start}>
          {game.isStarted ? 'Pause Game' : 'Start Game'}
        </Button>
      )}
      <Button onPress={game.reset}>Reset Game</Button>
    </View>
  )

  if (!game.isStarted) {
    return (
      <View>
        <Text style={{ fontSize: 50, alignSelf: 'center' }}>{game.isOver ? '😞' : '🙂'}</Text>
        {buttons}
      </View>
    )
  }

  const { answers, operandLeft, operator, operandRight } = currentTask

  return (
    <View>
      <Text style={style.operation}>
        {operandLeft} {operator} {operandRight} = ?
      </Text>

      <View style={style.answersContainer}>
        {answers.map((variant, idx) => (
          <Text style={style.answer} key={idx} onPress={() => checkAnswer(variant)}>
            {variant}
          </Text>
        ))}
      </View>
      {buttons}
    </View>
  )
}

const style = StyleSheet.create({
  operation: {
    fontSize: 60,
    alignSelf: 'center',
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  answer: {
    flexGrow: 1,
    flexBasis: '25%',
    marginLeft: -1,
    marginTop: -1,
    padding: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 300,
    textAlign: 'center',
  },
})
