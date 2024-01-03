import { Platform, StyleSheet, View } from 'react-native'
import { Avatar as AvatarPaper } from 'react-native-paper'

import { useFetchAvatar } from '../hooks/use-fetch-avatar'

interface Props {
  size: number
  url?: string
  onUpload?: (filePath: string) => void
}

export default function Avatar({ size = 150 }: Props) {
  const { avatarUrl, uploadAvatar } = useFetchAvatar()

  return (
    <View
      onPointerDown={uploadAvatar}
      accessible={true}
      accessibilityRole="button"
      accessibilityActions={[{ name: 'activate' }]}
      onAccessibilityAction={uploadAvatar}
      style={styles.avatar}
    >
      {avatarUrl ? (
        <AvatarPaper.Image size={size} source={{ uri: avatarUrl }} />
      ) : (
        <AvatarPaper.Icon size={size} icon="account" />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    display: 'flex',
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
})
