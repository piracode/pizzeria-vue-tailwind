export function closeMenuAndScroll(sectionId, fixedHeaderHeight) {
  const section = document.querySelector(sectionId)

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })

  // Delayed adjustment for fixed header
  setTimeout(() => {
    if (fixedHeaderHeight) {
      window.scrollBy(0, -fixedHeaderHeight)
    }
  }, 100)
}
