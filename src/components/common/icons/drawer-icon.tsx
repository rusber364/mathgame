/* eslint-disable @typescript-eslint/no-unused-vars */
import { AntDesign, Entypo } from '@expo/vector-icons'

type Props = {
  color: string
  size: number
  focused: boolean
}

export function LanguagesIcon(props: Props) {
  return <Entypo name="language" size={24} color="black" />
}

export function ProfileIcon(props: Props) {
  return <AntDesign name="user" size={24} color="black" />
}

export function HomeIcon(props: Props) {
  return <AntDesign name="home" size={24} color="black" />
}

export function LoginIcon(props: Props) {
  return <Entypo name="login" size={24} color="black" />
}

export function LogoutIcon(props: Props) {
  return <Entypo name="log-out" size={24} color="black" />
}
