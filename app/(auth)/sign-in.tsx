import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Toast from 'react-native-toast-message'

import { supabase } from '~/database/supabase'
import type { RoutesList } from '~/types/RouteList'
import { Paper } from '~/layout/Paper'
import { Background } from '~/layout/Background'
import { Button } from '~/components/common/Button'
import { AuthTitle } from '~/features/auth/components/AuthTitle'
import { AuthField } from '~/features/auth/components/AuthField'

export function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  async function handleLogin() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (!error) {
      navigation.navigate('Profile')
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
      <Background>
        <Paper>
          <AuthTitle>Login</AuthTitle>
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
          <Button onPress={handleLogin} isLoading={isLoading}>
            Login
          </Button>
          <Button onPress={() => navigation.navigate('SignUp')}>Registration</Button>
        </Paper>
      </Background>
    </KeyboardAvoidingView>
  )
}
