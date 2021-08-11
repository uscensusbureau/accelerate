

const highlightAnchorNavigation = (anchorLinks, pageDivs, highlightClass) => {
  let lowestMatch = pageDivs[0]
  let i
  for (i = 0; i < anchorLinks.length; i++) {
    const section = pageDivs[i]
    const divDistanceFromTop = section.getBoundingClientRect().top

    // find
    if (divDistanceFromTop <= 250) { // && divDistanceFromTop + divHeight > 50 ) {
      lowestMatch = section
    }
  }

  let matchingLink = anchorLinks[0]
  for (i = 0; i < anchorLinks.length; i++) {
    const section = pageDivs[i]
    if (section === lowestMatch) {
      anchorLinks[i].classList.add(highlightClass)
      matchingLink = anchorLinks[i]
    } else {
      anchorLinks[i].classList.remove(highlightClass)
    }
  }

  return matchingLink
}

const navLinks = document.getElementsByClassName('usa-nav-link')
const headers = document.getElementsByTagName('h2')

// Add event listener to scroll
window.addEventListener('scroll', e => {
  highlightAnchorNavigation(navLinks, headers, 'usa-current')
})

// module.exports = highlightAnchorNavigation