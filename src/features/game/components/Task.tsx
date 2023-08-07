import { Text, View, StyleSheet } from 'react-native'

import { Button } from '~/components/common/Button'
import { useGameSelector, useGameDispatch } from '~/store/redux'

import { checkAnswer, getCurrentTask } from '~/store/slices/task.slice'
import { getStarted, timerReset, timerStart, timerStop } from '~/store/slices/timer.slice'
import { getGameIsOver } from '~/store/slices/game.slice'
import { AntDesign } from '@expo/vector-icons'

export function Task() {
  const dispatch = useGameDispatch()

  const timerIsStarted = useGameSelector(getStarted)
  const gameIsOver = useGameSelector(getGameIsOver)
  const currentTask = useGameSelector(getCurrentTask)

  const handleStart = () => dispatch(timerStart())
  const handlePause = () => dispatch(timerStop())
  const handleReset = () => dispatch(timerReset())

  const buttons = (
    <View>
      {gameIsOver ? (
        <></>
      ) : (
        <Button onPress={timerIsStarted ? handlePause : handleStart} style={style.button}>
          {timerIsStarted ? (
            <AntDesign name="pausecircleo" size={43} color="black" style={style.icons} />
          ) : (
            <AntDesign name="playcircleo" size={24} color="black" />
          )}
        </Button>
      )}
    </View>
  )

  if (!timerIsStarted) {
    return (
      <View>
        <Button onPress={handleStart}>
          <AntDesign name="playcircleo" size={43} color="black" style={style.icons} />
        </Button>
        <Button onPress={handleReset}>
          <AntDesign name="reload1" size={43} color="black" style={style.icons} />
        </Button>
      </View>
    )
  }

  return (
    <View>
      <Text style={style.operation}>{currentTask?.expression} = ?</Text>

      <View style={style.answersContainer}>
        {currentTask?.answers.map((variant, idx) => (
          <Text style={style.answer} key={idx} onPress={() => dispatch(checkAnswer(variant))}>
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
  icons: { justifyContent: 'center' },
  button: {},
  answer: {
    flexGrow: 1,
    flexBasis: '24%',
    margin: 1,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 300,
    textAlign: 'center',
  },
})
