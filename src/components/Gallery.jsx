import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import styles from './Gallery.module.css'

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  const handleNav = (dir) => {
    if (images.length <= 1) return

    setDirection(dir)
    setPrevIndex(currentIndex)

    setCurrentIndex((prev) => {
      if (dir === 1) return (prev + 1) % images.length
      if (dir === -1) return (prev - 1 + images.length) % images.length
      return prev
    })

    setTimeout(() => {
      setPrevIndex(null)
    }, 400)
  }

  // Setup swipe gesture handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNav(1),
    onSwipedRight: () => handleNav(-1),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false, // Only touch for mobile/tablet
  })

  if (images.length === 0) return null

  return (
    <div className={styles.gallery}>
      <div className={styles.imageWrapper} {...swipeHandlers}>
        {prevIndex !== null && (
          <img
            key={`prev-${prevIndex}`}
            src={images[prevIndex]}
            alt=""
            className={`${styles.image} ${direction === 1 ? styles.slideOutLeft : styles.slideOutRight}`}
            draggable={false}
          />
        )}
        <img
          key={`current-${currentIndex}`}
          src={images[currentIndex]}
          alt=""
          className={`${styles.image} ${direction === 1 ? styles.slideInRight : direction === -1 ? styles.slideInLeft : ''}`}
          draggable={false}
        />
      </div>

      <div className={styles.buttons}>
        <button onClick={() => handleNav(-1)} className={styles.navBtn}>‹</button>
        <button onClick={() => handleNav(1)} className={styles.navBtn}>›</button>
      </div>
    </div>
  )
}
