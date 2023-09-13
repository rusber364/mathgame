/* eslint-disable @typescript-eslint/no-unused-vars */
import * as DocumentPicker from 'expo-document-picker'
import { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'
import { Avatar as AvatarPaper } from 'react-native-paper'

import defaultAvatar from '~/assets/default_avatar.png'
import { supabase } from '~/database/supabase'

interface Props {
  size: number
  url?: string
  onUpload?: (filePath: string) => void
}

export default function Avatar({ url, size = 150, onUpload }: Props) {
  const [isUploading, setUploading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState<string>()

  // useEffect(() => {
  //   if (url) downloadImage(url), [url]
  // })

  // async function downloadImage(path: string) {
  //   try {
  //     const { data, error } = await supabase.storage.from('avatar').download(path)
  //     if (error) {
  //       throw error
  //     }
  //     const fr = new FileReader()
  //     fr.readAsDataURL(data)
  //     fr.onload = () => {
  //       setAvatarUrl(fr.result as string)
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log('Error downloading image:', error.message)
  //     }
  //   }
  // }

  async function uploadAvatar() {
    try {
      setUploading(true)
      const file = await DocumentPicker.getDocumentAsync({ type: 'images/*' })

      if (file.assets) {
        setAvatarUrl(file.assets?.[0].uri)
      }

      // const formData = new FormData()
      // formData.append('file', file)

      // const fileExt = file.name.split('.').pop()
      // const filePath = `${Math.random()}.${fileExt}`

      // let { error } = await supabase.storage.from('avatars').upload(filePath, formData)

      // if (error) {
      //   throw error
      // }

      // onUpload(filePath)
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setUploading(false)
    }
  }

  return (
    <View>
      {avatarUrl ? (
        <AvatarPaper.Image size={size} source={{ uri: avatarUrl }} />
      ) : (
        <AvatarPaper.Image size={size} source={defaultAvatar} />
      )}
      <View>
        <Button title={isUploading ? 'Uploading...' : 'Upload'} onPress={uploadAvatar} disabled={isUploading} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 5,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  image: {
    objectFit: 'cover',
    paddingTop: 0,
  },
  noImage: {
    backgroundColor: '#333',
    border: '1px solid rgb(200, 200, 200)',
    borderRadius: 5,
  },
})
