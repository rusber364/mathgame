import { Drawer } from 'expo-router/drawer'
import { StyleSheet } from 'react-native'

import { HomeIcon, LanguagesIcon, LoginIcon, LogoutIcon, ProfileIcon } from '~/components/common/icons/drawer-icon'
import { useAuthContext } from '~/features/auth/context/auth.context'

export default function IndexLayout() {
  const { isAuth } = useAuthContext()

  return (
    <Drawer screenOptions={styles}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: '',
          drawerIcon: HomeIcon,
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="(protected)/profile"
        options={{
          headerTitle: 'Profile',
          drawerIcon: ProfileIcon,
          drawerLabel: 'Profile',
        }}
        redirect={!isAuth}
      />
      <Drawer.Screen
        name="languages"
        options={{
          headerTitle: 'Languages',
          drawerIcon: LanguagesIcon,
          drawerLabel: 'Languages',
        }}
      />
      <Drawer.Screen
        name="login"
        options={{
          headerTitle: 'Login',
          drawerIcon: LoginIcon,
          drawerLabel: 'Login',
          drawerItemStyle: styles.drawerItemStyleAuth,
        }}
        redirect={isAuth}
      />
      <Drawer.Screen
        name="logout"
        options={{
          headerTitle: 'Logout',
          drawerIcon: LogoutIcon,
          drawerLabel: 'Logout',
          drawerItemStyle: styles.drawerItemStyleAuth,
        }}
        redirect={!isAuth}
      />
    </Drawer>
  )
}

const styles = StyleSheet.create({
  drawerContentContainerStyle: {
    height: '100%',
  },
  drawerItemStyleAuth: {
    marginTop: 'auto',
    backgroundColor: '#C2C2C2',
    marginBottom: 20,
  },
})
