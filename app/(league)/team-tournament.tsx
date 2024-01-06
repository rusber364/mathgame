import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

import { NavigateContainer } from '~/components/common/navigate-container'

// import {TeamTournament } from '~/components/navigation/single-tournament-navigation'

export default function SingleTournamentScreen() {
  const routers = useRouter()

  const navigateToGameWithBets = () => routers.push('/(league)/team-tournament-with-bets-screen')
  const navigateToGameWithoutBets = () => routers.push('/(league)/team-tournament-without-bets-screen')
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 40, fontWeight: '600' }}>Team Tournament</Text>
      </View>
      <View style={styles.button}>
        <NavigateContainer>
          <Button title="With Bets" onPress={navigateToGameWithBets} />
        </NavigateContainer>
      </View>
      <View style={styles.text}>
        <Text style={{ fontSize: 20 }}>Choose your Mode</Text>
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'center',
    alignContent: 'stretch',
    justifyContent: 'center',
    position: 'relative',
  },
  button: {
    margin: 50,
  },
  text: {
    margin: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
