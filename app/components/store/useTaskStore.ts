import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { generationTask } from '../../core/generationTask'

type TTask = {
  score: number
  isGameStarted: boolean
  gameOver: boolean
  finishTimeStamp: number
  idTimer?: NodeJS.Timer
  pauseMilliseconds?: number
  time: number
  currentTask: ReturnType<typeof generationTask>
  startGame(): void
  pauseGame(): void
  restartGame(): void
  checkAnswer(value: number): void
}

const initFinishTime = (milliseconds: number) => Date.now() + milliseconds
const defaultMilliseconds = 10000

export const useTaskStore = create<TTask>()(
  devtools((set, get) => ({
    score: 0,
    isGameStarted: false,
    gameOver: false,
    finishTimeStamp: 0,
    pauseMilliseconds: 0,
    time: defaultMilliseconds,
    currentTask: generationTask(),
    pauseGame() {
      const { time, idTimer } = get()
      set({
        isGameStarted: false,
        pauseMilliseconds: time,
        finishTimeStamp: 0,
      })
      clearInterval(idTimer)
    },
    startGame() {
      const { isGameStarted } = get()

      if (!isGameStarted) {
        const idTimer = setInterval(() => {
          let { pauseMilliseconds, finishTimeStamp } = get()

          if (!finishTimeStamp) {
            finishTimeStamp = pauseMilliseconds
              ? initFinishTime(pauseMilliseconds)
              : initFinishTime(defaultMilliseconds)
          }
          const leftMilliseconds = finishTimeStamp - Date.now()
          set({ time: leftMilliseconds, finishTimeStamp })

          if (leftMilliseconds <= 100) {
            clearInterval(idTimer)
            set({ gameOver: true, isGameStarted: false })
          }
        }, 100)

        set({ idTimer, isGameStarted: true })
      }
    },
    restartGame() {
      set({
        isGameStarted: false,
        score: 0,
        finishTimeStamp: 0,
        pauseMilliseconds: 0,
        gameOver: false,
        time: defaultMilliseconds,
      })
      clearInterval(get().idTimer)
    },
    checkAnswer(value) {
      const { currentTask, score } = get()
      const { id, storeAnswers } = currentTask
      const isValid = storeAnswers[id] === value
      const newTask = generationTask()

      const resetStore = {
        time: defaultMilliseconds,
        finishTimeStamp: 0,
        pauseMilliseconds: 0,
      }

      if (isValid) {
        set({
          score: score + 1,
          currentTask: newTask,
          ...resetStore,
        })
      } else {
        set({
          score: score - 1,
          currentTask: newTask,
          ...resetStore,
        })
      }
    },
  }))
)
