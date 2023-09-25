import { StyleSheet, View, type ViewProps } from 'react-native'

export function DrawerContainer({ children, style, ...props }: ViewProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    top: 'auto',
    bottom: 'auto',
  },
})
