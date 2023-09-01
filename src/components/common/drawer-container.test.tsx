import { render, screen } from '@testing-library/react-native'
import { Text } from 'react-native'

import { DrawerContainer } from './drawer-container'

test('render DrawerContainer default style', () => {
  const testID = 'drawer-container'

  render(
    <DrawerContainer testID={testID}>
      <Text>content</Text>
    </DrawerContainer>,
  )

  expect(screen.getByTestId(testID)).toHaveStyle({ height: '100%', justifyContent: 'center' })
  expect(screen.getByTestId(testID)).toHaveTextContent('content')
})

test('render DrawerContainer style props', () => {
  const testID = 'drawer-container'

  render(
    <DrawerContainer style={{ height: '50%', backgroundColor: 'red' }} testID={testID}>
      <Text>content</Text>
    </DrawerContainer>,
  )

  expect(screen.getByTestId(testID)).toHaveStyle({ height: '50%', backgroundColor: 'red', justifyContent: 'center' })
  expect(screen.getByTestId(testID)).toHaveTextContent('content')
})
