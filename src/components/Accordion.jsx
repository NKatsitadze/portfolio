import { useState } from 'react'
import styles from './Accordion.module.css'

export default function Accordion({ title, description, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <div className={styles.texts}>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <button className={styles.toggleBtn} aria-label="Toggle accordion">
          <img
            src={isOpen ? '/chevron-up.svg' : '/chevron-down.svg'}
            alt="Toggle icon"
            className={styles.chevronIcon}
          />
        </button>
      </div>

      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  )
}
