import { useState } from 'react'
import { useGenerationTask } from '../hooks/useGenerationTask'
import { useInterval } from '../hooks/useInterval'

export type GameStore = ReturnType<typeof useGameStore>

const defaultTime = 60000

export function useGameStore() {
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(defaultTime)
  const [isGameStarted, setGameStarted] = useState(false)
  const [isGameOver, setGameOver] = useState(false)

  const { currentTask, resetTask } = useGenerationTask()

  const { startInterval, endInterval } = useInterval(() => {
    setTime((time) => {
      if (time <= 1000) {
        setGameOver(true)
        setGameStarted(false)
        endInterval()
        return 0
      }

      return time - 1000
    })
  })

  function startGame() {
    if (!isGameStarted) {
      setGameStarted(true)
      startInterval()
    }
  }

  function pauseGame() {
    setGameStarted(false)
    endInterval()
  }

  function resetGame() {
    setGameStarted(false)
    setScore(0)
    setGameOver(false)
    setTime(defaultTime)
    endInterval()
  }

  function checkAnswer(value: number) {
    const isValid = currentTask.result === value

    if (isValid) {
      setScore((score) => score + 1)
    } else {
      setTime((time) => time - 2000)
    }

    resetTask()
  }

  return {
    game: {
      start: startGame,
      reset: resetGame,
      pause: pauseGame,
      isStarted: isGameStarted,
      isOver: isGameOver,
    },
    checkAnswer,
    currentTask,
    score,
    time,
  }
}
