import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import type { RoutesList } from '../../types/RouteList'
import { Paper } from '../../layout/Paper'
import { Background } from '../../layout/Background'
import { Button } from '../../components/common/Button'
import { delay } from '../../utils/delay'
import { AuthTitle } from '../../features/auth/components/AuthTitle'
import { AuthField } from '../../features/auth/components/AuthField'

export function SignUpScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<RoutesList>>()

  async function handleRegistration() {
    setLoading(true)
    await delay(1000)
    setEmail('')
    setPassword('')
    setLoading(false)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <Background>
        <Paper>
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
          <Button onPress={() => navigation.navigate('SignIn')}>Login</Button>
        </Paper>
      </Background>
    </KeyboardAvoidingView>
  )
}
