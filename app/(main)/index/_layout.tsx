import { Drawer } from 'expo-router/drawer'
import { StyleSheet } from 'react-native'

import { configDrawerScreens } from '~/components/common/icons/drawer-icon'

export default function IndexLayout() {
  return (
    <Drawer screenOptions={styles}>
      {configDrawerScreens.map((screen) => (
        <Drawer.Screen key={screen.name} name={screen.name} options={screen.options} />
      ))}
    </Drawer>
  )
}

const styles = StyleSheet.create({
  drawerContentContainerStyle: {
    height: '100%',
  },
})
