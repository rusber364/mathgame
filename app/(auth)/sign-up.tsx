import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'

import { supabase } from '~/database/supabase'
import { AuthTitle } from '~/features/auth/components/auth-title'
import { delay } from '~/utils/delay'

export default function SignUpScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isShowPassword, setShowPassword] = useState(true)
  const router = useRouter()

  async function handleRegistration() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    // TODO: delete delay
    await delay(1000)

    if (!error) {
      Toast.show({
        type: 'info',
        text1: 'confirm your email',
        text2: `send to ${email}`,
      })
    } else {
      Toast.show({
        type: 'error',
        text1: error.name,
        text2: error.message,
      })
    }

    setLoading(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ justifyContent: 'center', flex: 1 }}
    >
      <View style={styles.root}>
        <AuthTitle>Register</AuthTitle>
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
        <Button loading={isLoading} mode="contained" onPress={handleRegistration}>
          Registration
        </Button>
        <View style={styles.container}>
          <Text>Already have an account?</Text>
          <Button onPress={() => router.push('/sign-in')}>Login</Button>
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
