/* eslint-disable @typescript-eslint/no-unused-vars */
import { AntDesign, Entypo } from '@expo/vector-icons'
import { type DrawerNavigationOptions } from '@react-navigation/drawer'

type Props = {
  color: string
  size: number
  focused: boolean
}

type ConfigDrawerScreens = {
  name: string
  options: DrawerNavigationOptions
}[]

export function LanguagesIcon(props: Props) {
  return <Entypo name="language" size={24} color="black" />
}

export function ProfileIcon(props: Props) {
  return <AntDesign name="user" size={24} color="black" />
}

export function HomeIcon(props: Props) {
  return <AntDesign name="home" size={24} color="black" />
}

export function LogoutIcon(props: Props) {
  return <Entypo name="log-out" size={24} color="black" />
}

export const configDrawerScreens: ConfigDrawerScreens = [
  {
    name: 'index',
    options: {
      headerTitle: '',
      drawerIcon: HomeIcon,
      drawerLabel: 'Home',
    },
  },
  {
    name: '(protected)/profile',
    options: {
      headerTitle: 'Profile',
      drawerIcon: ProfileIcon,
      drawerLabel: 'Profile',
    },
  },
  {
    name: 'languages',
    options: {
      headerTitle: 'Languages',
      drawerIcon: LanguagesIcon,
      drawerLabel: 'Languages',
    },
  },
  {
    name: 'logout',
    options: {
      headerTitle: 'Logout',
      drawerIcon: LogoutIcon,
      drawerLabel: 'Logout',
      drawerItemStyle: {
        marginTop: 'auto',
        backgroundColor: '#C2C2C2',
        marginBottom: 20,
      },
    },
  },
]
