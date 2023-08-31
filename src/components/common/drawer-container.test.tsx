import { render, screen } from '@testing-library/react'
import { Text } from 'react-native'

import { DrawerContainer } from './drawer-container'

test('render DrawerContainer', () => {
  const testID = 'drawer-container'

  render(
    <DrawerContainer style={{ width: '100%', backgroundColor: 'red' }} testID={testID}>
      <Text>content</Text>
    </DrawerContainer>,
  )

  expect(screen.getByTestId(testID)).toHaveTextContent('content')
  expect(screen.getByTestId(testID)).toHaveStyle({ width: '100%' })
  expect(screen.getByTestId(testID)).toHaveStyle({ backgroundColor: 'rgba(255, 0, 0, 1.00)' })
})
