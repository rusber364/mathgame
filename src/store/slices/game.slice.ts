import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    isStarted: false,
    isOver: false,
    score: 0,
    attempts: 5,
    level: 1,
    stage: 1,
  },
  reducers: {
    start(state) {
      state.isStarted = true
    },

    over(state) {
      state.isOver = true
      state.isStarted = false
    },

    reset(state) {
      state.score = 0
      state.isOver = false
      state.isStarted = false
    },

    addScore(state, action: PayloadAction<number>) {
      state.score += action.payload

      if (state.score > 10) {
        state.score = 0
        state.level++
      }
    },

    addAttempts(state, action: PayloadAction<number | undefined>) {
      const attempt = action.payload ?? 1
      state.attempts += attempt
    },

    removeAttempts(state, action: PayloadAction<number | undefined>) {
      const attempt = action.payload ?? 1
      if (attempt > state.attempts) {
        state.attempts = 0
        return
      }
      state.attempts -= attempt
    },
  },
})

export const {
  start: gameStart,
  reset: gameReset,
  over: gameOver,
  addScore,
  addAttempts,
  removeAttempts,
} = gameSlice.actions

export const getScore = (state: RootState) => state.game.score

export default gameSlice.reducer
