import { useRouter } from 'expo-router'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'

import { Button } from '~/components/common/button.comp'
import { supabase } from '~/database/supabase'
import { AuthTitle } from '~/features/auth/components/auth-title'

export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isShowPassword, setShowPassword] = useState(true)

  const router = useRouter()

  async function handleLogin() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (!error) {
      router.push('/index/profile')
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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', flexGrow: 1 }}>
        <AuthTitle>Login</AuthTitle>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <TextInput
            right={<TextInput.Icon icon="eye" onPress={() => setShowPassword(!isShowPassword)} />}
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={isShowPassword}
          />
        </View>
        <Button onPress={handleLogin} isLoading={isLoading}>
          Login
        </Button>
        <Button onPress={() => router.push('/sign-up')}>Registration</Button>
      </View>
    </KeyboardAvoidingView>
  )
}
