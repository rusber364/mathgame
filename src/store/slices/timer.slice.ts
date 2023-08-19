import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Task } from 'redux-saga'
import { cancel, delay, fork, put, select, take, takeLatest } from 'redux-saga/effects'

import { RootState } from '../redux'
import { gameOver, gameStart } from './game.slice'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    time: 60000,
    isStarted: false,
  },
  reducers: {
    start(state) {
      state.isStarted = true
    },
    stop(state) {
      state.isStarted = false
    },
    reset(state) {
      state.time = 60000
      state.isStarted = false
    },
    update(state, { payload: delay }: PayloadAction<number>) {
      state.time -= delay
    },
  },
})

export const { start: timerStart, stop: timerStop, reset: timerReset, update: timerUpdate } = timerSlice.actions

export const getTime = (state: RootState) => state.timer.time
export const getStarted = (state: RootState) => state.timer.isStarted

export function* timerSaga() {
  yield takeLatest([timerStart, gameStart], function* () {
    const task: Task = yield fork(function* () {
      while (true) {
        const time: number = yield select(getTime)

        if (time <= 0) {
          yield put(gameOver())
          yield put(timerStop())
          break
        }

        yield put(timerUpdate(1000))
        yield delay(1000)
      }
    })

    yield take(timerStop)
    yield cancel(task)
  })
}

export default timerSlice.reducer
