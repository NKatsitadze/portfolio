import { useState, useRef, useEffect } from 'react'
import styles from './Accordion.module.css'

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    } else {
      setMaxHeight(0)
    }
  }, [isOpen])

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={() => setIsOpen(prev => !prev)}>
        <div className={styles.texts}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <button className={styles.toggleBtn} aria-label="Toggle accordion">
          <img
            src={isOpen ? '/chevron-up.svg' : '/chevron-down.svg'}
            alt="Toggle icon"
            className={styles.chevronIcon}
          />
        </button>
      </div>

      <div
        ref={contentRef}
        className={styles.contentWrapper}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
