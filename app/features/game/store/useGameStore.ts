import { useState, useRef } from 'react'
import { generationTask } from '../core/generationTask'
import { defaultMilliseconds, initFinishTime } from '../utils/initFinishTime'

export type GameStore = ReturnType<typeof useGameStore>

export function useGameStore() {
  const idTimer = useRef<NodeJS.Timer>()
  const finishTimeStamp = useRef<number>(0)
  const pauseMilliseconds = useRef<number>(0)
  const currentTask = useRef(generationTask())

  const [score, setScore] = useState(0)
  const [isGameStarted, setGameStarted] = useState(false)
  const [isGameOver, setGameOver] = useState(false)
  const [time, setTime] = useState(defaultMilliseconds)

  function startGame() {
    if (!isGameStarted) {
      idTimer.current = setInterval(() => {
        if (!finishTimeStamp.current) {
          finishTimeStamp.current = pauseMilliseconds.current
            ? initFinishTime(pauseMilliseconds.current)
            : initFinishTime(defaultMilliseconds)
        }
        const leftMilliseconds = finishTimeStamp.current - Date.now() - 1000

        setTime(leftMilliseconds)

        if (leftMilliseconds <= 100) {
          clearInterval(idTimer.current)
          setGameOver(true)
          setGameStarted(false)
        }
      }, 1000)

      setGameStarted(true)
    }
  }

  function pauseGame() {
    setGameStarted(false)
    finishTimeStamp.current = 0
    pauseMilliseconds.current = time
    clearInterval(idTimer.current)
  }

  function restartGame() {
    setGameStarted(false)
    setScore(0)
    setGameOver(false)
    setTime(defaultMilliseconds)
    finishTimeStamp.current = 0
    pauseMilliseconds.current = 0
    clearInterval(idTimer.current)
  }

  function checkAnswer(value: number) {
    const isValid = currentTask.current.result === value

    const reset = () => {
      const newTask = generationTask()

      setTime(defaultMilliseconds)
      currentTask.current = newTask
      finishTimeStamp.current = 0
      pauseMilliseconds.current = 0
    }

    if (isValid) {
      setScore(score + 1)
      reset()
    } else {
      setScore(score - 1)
      reset()
    }
  }

  return {
    startGame,
    pauseGame,
    restartGame,
    checkAnswer,
    isGameStarted,
    isGameOver,
    currentTask: currentTask.current,
    score,
    time,
  }
}
