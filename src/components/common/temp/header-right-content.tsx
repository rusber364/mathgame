import { View, Text, StyleSheet } from 'react-native'

export function HeaderRightContent() {
  return (
    <View style={styles.headerRightContent}>
      <Text style={styles.headerRightText}>Attempts:5 Timer:60sec</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  headerRightText: {
    fontSize: 16,
    color: '#333',
    marginRight: 5,
  },
})
