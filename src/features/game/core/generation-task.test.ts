import { generationTask } from './generation-task'

test('random simple numbers', async () => {
  const task = generationTask()

  expect(task.answers).toHaveLength(4)
})
