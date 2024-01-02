export function blobToBase64(data: Blob): Promise<string> {
  return new Promise((resolve) => {
    const fb = new FileReader()
    fb.readAsDataURL(data)
    fb.onloadend = () => {
      if (typeof fb.result === 'string') {
        resolve(fb.result)
      }
    }
  })
}
