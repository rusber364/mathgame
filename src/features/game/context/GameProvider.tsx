import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { GameStore, useGameStore } from '../store/useGameStore'

const GameContext = createContext<GameStore | null>(null)

export function GameProvider({ children }: PropsWithChildren) {
  const value = useGameStore()

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGameContext() {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider')
  }

  return context
}
