import { Text, View, StyleSheet, Image } from 'react-native'

import { Button } from '~/components/common/Button'
import { useGameSelector, useGameDispatch } from '~/store/redux'
import reload from '~/assets/reload.png'
import pause from '~/assets/pause.png'
import play from '~/assets/play.png'
import { checkAnswer } from '~/store/slices/task.slice'
import { timerReset, timerStart, timerStop } from '~/store/slices/timer.slice'

export function Task() {
  const { game, task, timer } = useGameSelector((state) => state)
  const dispatch = useGameDispatch()

  const handleStart = () => dispatch(timerStart())
  const handlePause = () => dispatch(timerStop())
  const handleReset = () => dispatch(timerReset())

  const buttons = (
    <View>
      {game.isOver ? (
        <Button disabled onPress={handleReset} style={style.button}>
          <Image source={reload} style={{ width: 15, height: 15 }} />
        </Button>
      ) : (
        <Button onPress={timer.isStarted ? handlePause : handleStart} style={style.button}>
          {timer.isStarted ? (
            <Image source={pause} style={{ width: 15, height: 15 }} />
          ) : (
            <Image source={play} style={{ width: 15, height: 15 }} />
          )}
        </Button>
      )}
      <Button onPress={handleReset} style={style.button}>
        <Image source={reload} style={{ width: 15, height: 15 }} />
      </Button>
    </View>
  )

  if (!timer.isStarted) {
    return (
      <View>
        <Text style={{ fontSize: 50, alignSelf: 'center' }}>{game.isOver ? '😞' : '🙂'}</Text>
        {buttons}
      </View>
    )
  }

  return (
    <View>
      <Text style={style.operation}>{task.currentTask?.expression} = ?</Text>

      <View style={style.answersContainer}>
        {task.currentTask?.answers.map((variant, idx) => (
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
  button: {
    backgroundColor: '#f5deb3',
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
