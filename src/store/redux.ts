import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'
import gameReducer from './slices/game.slice'
import taskReducer from './slices/task.slice'
import timerReducer from './slices/timer.slice'

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

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useGameDispatch: () => AppDispatch = useDispatch
export const useGameSelector: TypedUseSelectorHook<RootState> = useSelector
