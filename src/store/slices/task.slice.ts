import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import templateList from '../templateList.json'
import { generationTask, type TTask } from '~/features/game/core/generation-task'
import { takeLatest, call, select, put, delay } from 'redux-saga/effects'
import { timerStart } from './timer.slice'
import { addScore, gameStart } from './game.slice'
import { RootState } from '../redux'

type TaskState = {
  currentTask?: TTask
  currentTemplateList: string[]
  template?: string
  templateList: string[][]
  stageLoading: boolean
}

const initialState: TaskState = {
  templateList,
  currentTemplateList: [],
  template: '',
  stageLoading: false,
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    create(state, { payload: currentTask }: PayloadAction<TTask>) {
      state.currentTask = currentTask
    },
    setCurrentTemplateList(state, { payload: currentTemplateList }: PayloadAction<string[]>) {
      state.currentTemplateList = currentTemplateList
    },
    setCurrentTemplate(state, { payload: template }: PayloadAction<string>) {
      state.template = template
    },
    registerStageLoading(state, { payload: stageLoading }: PayloadAction<boolean>) {
      state.stageLoading = stageLoading
    },
  },
})

export const checkAnswer = createAction<number>('task/checkAnswer')
export const registerStage = createAction<number>('task/registerStage')

export const registerTemplate = createAction<number>('task/registerTemplate')
export const {
  create: taskCreate,
  setCurrentTemplateList,
  setCurrentTemplate,
  registerStageLoading,
} = taskSlice.actions

export default taskSlice.reducer

export const getTemplate = (state: RootState) => state.task.template
export const getCurrentTask = (state: RootState) => state.task.currentTask
export const getTemplateList = (state: RootState) => state.task.templateList
export const getCurrentTemplateList = (state: RootState) => state.task.currentTemplateList
export const getStageLoading = (state: RootState) => state.task.stageLoading

export function* taskSaga() {
  yield takeLatest([timerStart, gameStart], createTaskSaga)
}

export function* createTaskSaga() {
  const template: string | undefined = yield select(getTemplate)
  if (typeof template === 'string') {
    const newTask: TTask = yield call(generationTask, template)
    yield put(taskCreate(newTask))
  }
}

export function* checkAnswerSaga() {
  yield takeLatest(checkAnswer, function* ({ payload }) {
    const currentTask: TTask = yield select(getCurrentTask)
    const isValid = currentTask.result === payload
    if (isValid) {
      yield put(addScore(1))
    }
    yield call(createTaskSaga)
  })
}

export function* registerStageSaga() {
  yield takeLatest(registerStage, function* ({ payload: stage }) {
    yield put(registerStageLoading(true))
    yield delay(1000)
    const templateList: string[][] = yield select(getTemplateList)
    const currentTemplateListByStage: string[] = templateList[stage - 1].slice()
    if (currentTemplateListByStage) {
      yield put(setCurrentTemplateList(currentTemplateListByStage))
      yield put(registerStageLoading(false))
    }
  })
}

export function* registerTemplateSaga() {
  yield takeLatest(registerTemplate, function* ({ payload: template }) {
    const currentTemplateList: string[] = yield select(getCurrentTemplateList)
    const currentTemplate: string = currentTemplateList[template]
    if (currentTemplate) {
      yield put(setCurrentTemplate(currentTemplate))
      yield call(createTaskSaga)
    }
  })
}
