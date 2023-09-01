import { useRouter } from 'expo-router'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

import { AuthTitle } from '~/features/auth/components/auth-title'
import { useSupabaseCallbacks } from '~/features/auth/hooks/use-supabase-callbacks'

export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowPassword, setShowPassword] = useState(true)
  const { isLoading, login } = useSupabaseCallbacks()
  const router = useRouter()

  const handleLogin = () => login(email, password)

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <View style={styles.root}>
        <AuthTitle>Login</AuthTitle>
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
        <Button mode="contained" loading={isLoading} onPress={handleLogin}>
          Login
        </Button>
        <View style={styles.container}>
          <Text>Not a member?</Text>
          <Button onPress={() => router.push('/sign-up')}>Registration</Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
  },
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
