import { useState } from 'react'

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
      })
      .catch(() => {
        setIsCopied(false)
      })
  }

  return { isCopied, copyToClipboard }
}

export default useClipboard
