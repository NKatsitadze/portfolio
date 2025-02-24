const preventScroll = (e) => e.preventDefault()

export const handleScroll = (showModal) => {
    if (showModal) {
        document.addEventListener("wheel", preventScroll, { passive: false })
        document.addEventListener("touchmove", preventScroll, { passive: false })
    } else {
        document.removeEventListener("wheel", preventScroll)
        document.removeEventListener("touchmove", preventScroll)
    }
}
