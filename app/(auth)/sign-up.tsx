import { useRouter } from 'expo-router'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'

import { Button } from '~/components/common/button.comp'
import { supabase } from '~/database/supabase'
import { AuthTitle } from '~/features/auth/components/auth-title'

export default function SignUpScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isShowPassword, setShowPassword] = useState(true)
  const router = useRouter()

  async function handleRegistration() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })

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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', flexGrow: 1 }}>
        <AuthTitle>Register</AuthTitle>
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

        <Button onPress={handleRegistration} isLoading={isLoading}>
          Registration
        </Button>
        <Button onPress={() => router.push('/sign-in')}>Login</Button>
      </View>
    </KeyboardAvoidingView>
  )
}
