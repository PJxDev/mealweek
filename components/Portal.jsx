import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from '../styles/portal.module.css'

export default function Portal({ children }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#portal')
    setMounted(true)
  }, [])

  return mounted && ref.current
    ? createPortal(
        <div className={styles.overlay}>{children}</div>,
        ref.current
      )
    : null
}
