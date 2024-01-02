import * as DocumentPicker from 'expo-document-picker'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Avatar as AvatarPaper } from 'react-native-paper'
import Toast from 'react-native-toast-message'

import { supabase } from '~/database/supabase'
import { useAuthContext } from '~/features/auth/context/auth.context'
import { blobToBase64 } from '~/utils/blobToBase64'

interface Props {
  size: number
  url?: string
  onUpload?: (filePath: string) => void
}

export default function Avatar({ size = 150 }: Props) {
  const [avatarUrl, setAvatarUrl] = useState<string>()
  const { session } = useAuthContext()
  const userId = session?.user.id

  useEffect(() => {
    async function downloadImage() {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(`${userId}.avatar`)
        if (error) {
          throw error
        }

        const avatar = await blobToBase64(data)
        setAvatarUrl(avatar)
      } catch (error) {
        if (error instanceof Error) {
          console.log('Error downloading image:', error.message)
        }
      }
    }

    downloadImage()
  }, [userId])

  async function uploadAvatar() {
    try {
      const file = await DocumentPicker.getDocumentAsync({ type: 'images/*' })
      if (file.assets && file.assets.length) {
        const uri = file.assets[0].uri
        setAvatarUrl(uri)
        const avatarFile = file.output?.item(0)
        if (avatarFile) {
          const storage = supabase.storage.from('avatars')
          const { error } = await storage.update(`${userId}.avatar`, avatarFile)
          if (error) {
            await storage.upload(`${userId}.avatar`, avatarFile)
          }
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({
          type: 'error',
          text1: error.name,
          text2: error.message,
        })
      }
    }
  }

  return (
    <View
      onPointerDown={uploadAvatar}
      accessible={true}
      accessibilityRole="button"
      accessibilityActions={[{ name: 'activate' }]}
      onAccessibilityAction={uploadAvatar}
    >
      {avatarUrl ? (
        <AvatarPaper.Image size={size} source={{ uri: avatarUrl }} />
      ) : (
        <AvatarPaper.Icon size={size} icon="account" />
      )}
    </View>
  )
}
