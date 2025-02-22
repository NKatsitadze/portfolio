export const handleScroll = (showModal) => {
    const preventScroll = (e) => e.preventDefault()
  
    if (showModal) {
      document.addEventListener("wheel", preventScroll, { passive: false })
      document.addEventListener("touchmove", preventScroll, { passive: false })
    } else {
      document.removeEventListener("wheel", preventScroll)
      document.removeEventListener("touchmove", preventScroll)
    }
  
    return () => {
      document.removeEventListener("wheel", preventScroll)
      document.removeEventListener("touchmove", preventScroll)
    }
}
