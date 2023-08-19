import Toast from 'react-native-toast-message'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'

import { supabase } from '~/database/supabase'
import { Button } from '~/components/common/button.comp'
import { AuthTitle } from '~/features/auth/components/auth-title'
import { AuthField } from '~/features/auth/components/auth-field'

export default function SignUpScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
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
          <AuthField
            labelText="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <AuthField
            labelText="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
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
