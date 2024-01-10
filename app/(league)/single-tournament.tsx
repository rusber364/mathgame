import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

import { NavigateContainer } from '~/components/common/navigate-container'

// import { SingleTournament } from '~/components/navigation/single-tournament-navigation'

export default function SingleTournamentScreen() {
  const router = useRouter()

  const navigateToGameWithBets = () => router.push('/(league)/single-tournament-with-bets-screen')
  const navigateToGameWithoutBets = () => router.push('/(league)/single-tournament-without-bets-screen')
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 30, fontWeight: '600' }}>Single Tournament</Text>
      </View>
      <View style={styles.button}>
        <NavigateContainer>
          <Button title="With Bets" onPress={navigateToGameWithBets} />
        </NavigateContainer>
      </View>
      <View style={styles.text}>
        <Text style={{ fontSize: 20 }}>Choose your Mode </Text>
      </View>
      <View style={styles.button}>
        <NavigateContainer>
          <Button title="Without" onPress={navigateToGameWithoutBets} />
        </NavigateContainer>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 50,
  },
  container: {
    alignContent: 'stretch',
    alignItems: 'stretch',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
})
