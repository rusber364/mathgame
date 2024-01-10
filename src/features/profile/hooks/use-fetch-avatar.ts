import * as DocumentPicker from 'expo-document-picker'
import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'

import { supabase } from '~/database/supabase'
import { useAuthContext } from '~/features/auth/context/auth.context'
import { blobToBase64 } from '~/utils/blobToBase64'

export function useFetchAvatar() {
  const [avatarUrl, setAvatarUrl] = useState<string>()
  const { session } = useAuthContext()
  const userId = session?.user.id

  useEffect(() => {
    async function downloadAvatar(userId: string) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(`${userId}.avatar`)
        if (error) {
          throw error
        }

        const avatar = await blobToBase64(data)
        setAvatarUrl(avatar)
      } catch (error) {
        if (error instanceof Error) {
          console.log('Error downloading avatar:', error.message)
        }
      }
    }

    if (userId) downloadAvatar(userId)
  }, [userId])

  async function uploadAvatar() {
    try {
      const images = await DocumentPicker.getDocumentAsync({ type: 'images/*' })
      if (images.assets?.length) {
        const avatar = images.assets[0]
        const avatarFile = avatar.file
        if (avatarFile) {
          const storage = supabase.storage.from('avatars')
          const { error } = await storage.upload(`${userId}.avatar`, avatarFile, { upsert: true })
          if (error) {
            throw error
          }
          setAvatarUrl(avatar.uri)
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

  return { avatarUrl, uploadAvatar }
}
