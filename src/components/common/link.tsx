import { Link as LinkExpo, type LinkProps } from 'expo-router'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'

import { type NativeProps, type Props, style } from './button.comp'

export function Link(props: NativeProps<Props & LinkProps<string>>) {
  const { children, isLoading, href, replace, ...othersProps } = props

  return (
    <LinkExpo asChild href={href} replace={replace}>
      <Pressable {...othersProps} style={style.button}>
        <View style={{ flexDirection: 'row' }}>
          {isLoading && <ActivityIndicator style={style.indicator} color="#fff" />}
          <Text style={style.text}>{children}</Text>
        </View>
      </Pressable>
    </LinkExpo>
  )
}
