import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Avatar from '~/features/profile/components/avatar'
import teamUsers from '~/mocks/team-users.json'

export default function TeamScreen() {
  return (
    <View>
      <View style={styles.score}>
        <Text>Team Score</Text>
      </View>
      <Text style={{ alignSelf: 'center' }}>TeamScreen</Text>
      <View style={styles.avatar}>
        <Avatar size={250} />
      </View>

      <Button title="Create Team" />

      <View style={styles.containerTeam}>
        <View style={{ margin: 'auto' }}>
          {teamUsers.map((user) => (
            <View key={user.id} style={styles.boxPlayer}>
              <TouchableOpacity style={styles.player}>
                <View style={{ marginRight: 'auto', padding: 10 }}>
                  <Text>{user.nickname}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.buttons}>
                <Text>edit</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTeam: {
    backgroundColor: 'grey',
    borderRadius: 20,
  },
  player: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#ccc3',
  },
  boxPlayer: {
    margin: 5,
    flexDirection: 'row',
  },
  buttons: {
    backgroundColor: '#ccc3',
    borderRadius: 20,
    marginLeft: 'auto',
    borderColor: 'black',
    borderStyle: 'dashed',
    borderWidth: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  buttonCr: {
    margin: 0,
    backgroundColor: 'grey',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    backgroundColor: 'grey',
    borderRadius: 20,
    marginLeft: 'auto',
    padding: 10,
  },
})
