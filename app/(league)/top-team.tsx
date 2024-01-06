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
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  flat: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    margin: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 4,
    flexDirection: 'row',
    padding: 5,
    height: 'auto',
  },
  head: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    backgroundColor: 'white',
    position: 'static',
    marginBottom: 'auto',
    height: 'auto',
  },
  elementInSideFlat: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    margin: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 4,
    flexGrow: 5,
  },
  text: {
    fontSize: 16,

    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'DarkBlue',
    borderStyle: 'dashed',
    flexDirection: 'row',
    padding: 5,
    flexGrow: 5,
  },
})
