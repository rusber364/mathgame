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
    const { result } = renderHook(useGameStore)
    expect(result.current.time).toBe(20000)
  })

  test('start await 10s, pause, start await 5s, reset', () => {
    const { result } = renderHook(useGameStore)
    act(() => result.current.game.start())
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    act(() => result.current.game.pause())
    expect(result.current.game.isStarted).toBe(false)
    expect(result.current.game.isOver).toBe(false)
    expect(result.current.time).toBe(10000)
    act(() => result.current.game.start())
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(result.current.time).toBe(5000)
    act(() => result.current.game.reset())
    expect(result.current.time).toBe(20000)
  })

  test('pause timer after 5s', () => {
    const { result } = renderHook(useGameStore)
    act(() => result.current.game.start())
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    act(() => result.current.game.pause())
    expect(result.current.game.isStarted).toBe(false)
    expect(result.current.time).toBe(15000)
  })

  test('reset timer after 1s', () => {
    const { result } = renderHook(useGameStore)
    act(() => result.current.game.start())
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    act(() => result.current.game.reset())
    expect(result.current.time).toBe(20000)
  })
})
