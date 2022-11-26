import { vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useGameStore } from './useGameStore'

describe('render hook useGameStore', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('init state timer', () => {
    const { result } = renderHook(() => useGameStore())

    expect(result.current.time).toBe(20000)
  })

  test('start await 10s, pause, start await 5s, reset', () => {
    const { result, rerender } = renderHook(() => useGameStore())

    act(() => {
      result.current.game.start()
    })

    rerender()

    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(result.current.time).toBe(10000)

    act(() => {
      result.current.game.pause()
    })

    rerender()

    expect(result.current.time).toBe(10000)

    result.current.game.start()
    rerender()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(result.current.time).toBe(5000)

    act(() => {
      result.current.game.reset()
    })
    rerender()

    expect(result.current.time).toBe(20000)
  })

  test('reset timer', () => {
    const { result, rerender } = renderHook(() => useGameStore())

    act(() => {
      result.current.game.reset()
    })
    rerender()

    expect(result.current.time).toBe(20000)
  })
})
