import { Text } from 'react-native'
import { useGameContext } from '../context/GameProvider'
import { formatTimer } from '../utils/formatTimer'

export function Timer() {
  const { time } = useGameContext()

  return <Text style={{ borderWidth: 1, fontSize: 20, padding: 5 }}>Time: {formatTimer(time)}</Text>
}
