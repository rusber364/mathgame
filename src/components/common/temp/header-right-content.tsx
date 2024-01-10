import { StyleSheet, Text, View } from 'react-native'

export function HeaderRightContent() {
  return (
    <View style={styles.headerRightContent}>
      <Text style={styles.headerRightText}>Attempts:5 Timer:60sec</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerRightContent: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    flexDirection: 'row',
    marginRight: 10,
  },
  headerRightText: {
    color: '#333',
    fontSize: 16,
    marginRight: 5,
  },
})
