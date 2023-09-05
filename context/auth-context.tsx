import { createContext, type PropsWithChildren, useContext, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'

import { AuthTitle } from '~/features/auth/components/auth-title'

type Props = {
  title: string
}
const AuthFieldsContext = createContext({ email: '', password: '' })
export const useAuthFieldContext = () => useContext(AuthFieldsContext)

export function AuthFields(props: PropsWithChildren<Props>) {
  const { title, children } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowPassword, setShowPassword] = useState(true)

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
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
  textInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
    padding: 20,
  },
})
