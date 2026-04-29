import { useEffect } from 'react'
import './Toast.css'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3800)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className="toast">
      <span className="toast__msg">{message}</span>
      <button className="toast__close" onClick={onClose}>✕</button>
    </div>
  )
}
