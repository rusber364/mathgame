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
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxPlayer: {
    flexDirection: 'row',
    margin: 5,
  },
  buttons: {
    backgroundColor: '#ccc3',
    borderColor: 'black',
    borderRadius: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 'auto',
    paddingHorizontal: 5,
  },
  containerTeam: {
    backgroundColor: 'grey',
    borderRadius: 20,
  },
  player: {
    backgroundColor: '#ccc3',
    borderColor: 'black',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
  },
  score: {
    backgroundColor: 'grey',
    borderRadius: 20,
    marginLeft: 'auto',
    padding: 10,
  },
})
