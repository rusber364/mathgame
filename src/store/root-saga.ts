import { fork } from 'redux-saga/effects'

import { checkAnswerSaga, registerStageSaga, registerTemplateSaga, taskSaga } from './slices/task.slice'
import { timerSaga } from './slices/timer.slice'

export function* rootSaga() {
  yield fork(taskSaga)
  yield fork(timerSaga)
  yield fork(checkAnswerSaga)
  yield fork(registerStageSaga)
  yield fork(registerTemplateSaga)
}
