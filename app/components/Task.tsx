import { Text, View, StyleSheet } from 'react-native'
import { Paper } from '../layout/Paper'
import { Button } from './common/Button'
import { useTaskStore } from './store/useTaskStore'

export function Task() {
  const { checkAnswer, currentTask, restartGame, startGame, pauseGame, isGameStarted, gameOver } = useTaskStore()

  const buttons = (
    <View style={{ margin: 20 }}>
      {gameOver ? (
        <Button disabled onPress={restartGame}>
          Game Over
        </Button>
      ) : (
        <Button onPress={isGameStarted ? pauseGame : startGame}>{isGameStarted ? 'Pause Game' : 'Start Game'}</Button>
      )}
      <Button onPress={restartGame}>Reset Game</Button>
    </View>
  )

  if (!isGameStarted) {
    return (
      <Paper>
        <Text style={{ fontSize: 50 }}>{gameOver ? '😞' : '🙂'}</Text>
        {buttons}
      </Paper>
    )
  }

  const { answers, operandLeft, operator, operandRight } = currentTask

  const handleSetAnswer = (variant: number) => () => checkAnswer(variant)

  return (
    <View>
      <Text style={style.operation}>
        {operandLeft} {operator} {operandRight} = ?
      </Text>

      <View style={style.answersContainer}>
        {answers.map((variant, idx) => (
          <Text style={style.answer} key={idx} onPress={handleSetAnswer(variant)}>
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
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  answer: {
    flexGrow: 1,
    flexBasis: '25%',
    marginLeft: -1,
    marginTop: -1,
    padding: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
})
