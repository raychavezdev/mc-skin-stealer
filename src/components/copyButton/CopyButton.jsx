import { CiMedicalClipboard } from 'react-icons/ci'
import { BsClipboardCheck } from 'react-icons/bs'
import useClipboard from '../../hooks/setClipboard'

const CopyButton = ({ text }) => {
  const { isCopied, copyToClipboard } = useClipboard()

  return (
    <span onClick={() => copyToClipboard(text)}>
      {text}
      {!isCopied ? (
        <CiMedicalClipboard className='clip-icon' />
      ) : (
        <BsClipboardCheck className='clip-icon' />
      )}
    </span>
  )
}

export default CopyButton
