// scrollUtils.js

export function scrollWithOffset(targetSelector, headerOffset) {
  const sectionElement = document.querySelector(targetSelector)
  if (sectionElement) {
    const scrollToPosition = sectionElement.offsetTop - headerOffset

    const scrollStep = () => {
      if (window.scrollY !== scrollToPosition) {
        window.scrollBy(0, (scrollToPosition - window.scrollY) / 10)
        requestAnimationFrame(scrollStep)
      }
    }

    requestAnimationFrame(scrollStep)
  }
}
