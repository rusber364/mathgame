import { fork } from 'redux-saga/effects'
import { timerSaga } from './slices/timer.slice'
import { checkAnswerSaga, registerStageSaga, taskSaga, registerTemplateSaga } from './slices/task.slice'

export function* rootSaga() {
  yield fork(taskSaga)
  yield fork(timerSaga)
  yield fork(checkAnswerSaga)
  yield fork(registerStageSaga)
  yield fork(registerTemplateSaga)
}
