import { useState } from 'react'
import { Text } from 'react-native'
import { FlatList, StyleSheet, View } from 'react-native'

export default function TopSinglePlayerScreen() {
  const [users] = useState([
    1, 2, 3, 4, 5, 10, 20, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,

    2,
  ])

  return (
    <>
      <View>
        <View style={styles.container}></View>
        <View style={styles.head}>
          <Text>Top single players</Text>
        </View>

        <View style={styles.flat}>
          <FlatList
            data={users}
            renderItem={(template) => (
              <View key={template.item} style={styles.elementInSideFlat}>
                <Text style={styles.text}>1</Text>
                <Text style={styles.text}>Team name</Text>
                <Text style={styles.text}>Digits</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  elementInSideFlat: {
    backgroundColor: 'grey',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 4,
    flexDirection: 'row',
    flexGrow: 5,
    justifyContent: 'space-between',
    margin: 2,
  },
  flat: {
    alignItems: 'stretch',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 4,
    flexDirection: 'row',
    height: 'auto',
    justifyContent: 'space-between',
    margin: 10,
    padding: 5,
  },
  head: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    height: 'auto',
    marginBottom: 'auto',
    padding: 10,
  },
  text: {
    borderColor: 'DarkBlue',
    borderStyle: 'dashed',
    borderWidth: 2,
    flexDirection: 'row',
    flexGrow: 5,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
})
