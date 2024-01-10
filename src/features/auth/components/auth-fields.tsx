import { type PropsWithChildren, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'

import { AuthTitle } from '~/features/auth/components/auth-title'
import { AuthFieldsContext } from '~/features/auth/context/auth-fields.context'

type Props = {
  title: string
}

export function AuthFields(props: PropsWithChildren<Props>) {
  const { title, children } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowPassword, setShowPassword] = useState(true)
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height'

  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.keyboard}>
      <View style={styles.root}>
        <AuthTitle>{title}</AuthTitle>
        <TextInput
          style={styles.textInput}
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          right={
            <TextInput.Icon
              icon={isShowPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!isShowPassword)}
            />
          }
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={isShowPassword}
        />
        <AuthFieldsContext.Provider value={{ email, password }}>{children}</AuthFieldsContext.Provider>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
    padding: 20,
  },
  textInput: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
})
