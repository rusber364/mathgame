import { Drawer } from 'expo-router/drawer'
import { configDrawerScreens } from '~/components/common/icons/drawer-icon'

export default function IndexLayout() {
  return (
    <Drawer>
      {configDrawerScreens.map((screen) => (
        <Drawer.Screen key={screen.name} name={screen.name} options={screen.options} />
      ))}
    </Drawer>
  )
}
