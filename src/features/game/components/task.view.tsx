import { AntDesign } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { useGameDispatch, useGameSelector } from '~/store/redux'
import { checkAnswer, getCurrentTask } from '~/store/slices/task.slice'
import { getStarted, timerReset, timerStart, timerStop } from '~/store/slices/timer.slice'

export function Task() {
  const dispatch = useGameDispatch()

  const timerIsStarted = useGameSelector(getStarted)
  const currentTask = useGameSelector(getCurrentTask)

  const handleStart = () => dispatch(timerStart())
  const handlePause = () => dispatch(timerStop())
  const handleReset = () => dispatch(timerReset())

  if (!timerIsStarted) {
    return (
      <View style={{ margin: 'auto', flexDirection: 'row' }}>
        <Pressable onPress={handleStart} style={style.button}>
          <AntDesign name="playcircleo" size={35} color="black" style={style.icons} />
        </Pressable>
        <Pressable onPress={handleReset} style={style.button}>
          <AntDesign name="reload1" size={35} color="black" style={style.icons} />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={{ marginVertical: 'auto' }}>
      <Text style={style.operation}>{currentTask?.expression} = ?</Text>

      <View style={style.answersContainer}>
        {currentTask?.answers.map((variant, idx) => (
          <Text style={style.answer} key={idx} onPress={() => dispatch(checkAnswer(variant))}>
            {variant}
          </Text>
        ))}
      </View>
      <Pressable onPress={timerIsStarted ? handlePause : handleStart} style={style.button}>
        <AntDesign name={timerIsStarted ? 'pausecircleo' : 'playcircleo'} size={43} color="black" style={style.icons} />
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  answer: {
    borderRadius: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    flexBasis: '24%',
    flexGrow: 1,
    margin: 1,
    padding: 10,
    textAlign: 'center',
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  button: {
    borderRadius: 50,
    borderWidth: 1,
    margin: 3,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  icons: {
    textAlign: 'center',
  },
  operation: {
    alignSelf: 'center',
    fontSize: 60,
  },
})
