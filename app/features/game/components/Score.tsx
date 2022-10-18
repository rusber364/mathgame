import { Text } from 'react-native'
import { useGameContext } from '../context/GameProvider'

export function Score() {
  const { score } = useGameContext()

  return <Text style={{ borderWidth: 1, fontSize: 20, padding: 5 }}>Score: {score}</Text>
}
