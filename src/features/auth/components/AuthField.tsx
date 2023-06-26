import type { TextInputProps } from 'react-native'
import { View, Text, StyleSheet, TextInput } from 'react-native'

type Props = TextInputProps & {
  labelText?: string
}

export function AuthField(props: Props) {
  const { style, labelText, ...otherProps } = props

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{labelText}</Text>
      <View style={styles.containerInput}>
        <TextInput {...otherProps} style={[styles.input, style]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: { alignSelf: 'stretch' },
  containerInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: '#a8a29e',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  input: { padding: 8 },
  label: { marginVertical: 10 },
})
