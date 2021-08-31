

const highlightAnchorNavigation = (anchorLinks, pageDivs, highlightClass) => {
  let lowestMatchingSection = pageDivs[0]
  let shortestDistance = Number.MAX_SAFE_INTEGER
  let i
  for (i = 0; i < anchorLinks.length; i++) {
    const section = pageDivs[i]
    const divDistanceFromTop = section.getBoundingClientRect().bottom
    // find
    if (divDistanceFromTop >= 50 && divDistanceFromTop < shortestDistance) {
      lowestMatchingSection = section
      shortestDistance = divDistanceFromTop
    }
  }

  // let matchingLink = anchorLinks[0]
  for (i = 0; i < anchorLinks.length; i++) {
    const section = pageDivs[i]
    if (section === lowestMatchingSection) {
      anchorLinks[i].classList.add(highlightClass)
    } else {
      anchorLinks[i].classList.remove(highlightClass)
    }
  }
}

const navLinks = document.getElementsByClassName('usa-nav-link')
const headers = document.querySelectorAll('#links, #how-to, #sample-posts, #data-viz')


// Add event listener to scroll
window.addEventListener('scroll', e => {
  highlightAnchorNavigation(navLinks, headers, 'usa-current')
})