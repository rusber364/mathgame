import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { fork } from 'redux-saga/effects'

import timerReducer, { timerSaga } from './slices/timer.slice'
import taskReducer, { checkAnswerSaga, registerStageSaga, taskSaga, registerTemplateSaga } from './slices/task.slice'
import gameReducer from './slices/game.slice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    task: taskReducer,
    game: gameReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([sagaMiddleware])
  },
})

sagaMiddleware.run(function* rootSaga() {
  yield fork(taskSaga)
  yield fork(timerSaga)
  yield fork(checkAnswerSaga)
  yield fork(registerStageSaga)
  yield fork(registerTemplateSaga)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useGameDispatch: () => AppDispatch = useDispatch
export const useGameSelector: TypedUseSelectorHook<RootState> = useSelector
