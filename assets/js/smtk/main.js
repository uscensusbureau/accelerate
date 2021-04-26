---
---

const creativeResources = {{ site.data.2020-data-release.creative-resources | jsonify }}
// console.log(creativeResources)
const crSelect = document.getElementById('cr-select')
const [genericTitle, igTitle] = document.getElementsByClassName('cr-asset__title')
const [genericVideo, igVideo] = document.getElementsByClassName('cr-asset__asset--video')
const [genericImage, igImage] = document.getElementsByClassName('cr-asset__asset--image')
const videoContainers = document.getElementsByClassName('cr-asset__asset-container--video')
const imageContainers = document.getElementsByClassName('cr-asset__asset-container--image')

crSelect.addEventListener('change', e => {
  // console.log( crSelect.value )
  const match = creativeResources.find( el => el.title === crSelect.value )
  console.log(match)
  if( match ){
    genericTitle.innerHTML = match['resource-name']
    igTitle.innerHTML = match['resource-name']

    // hide & show containers
    const containersToShow = match.isVideo ? videoContainers : imageContainers
    const containersToHide = match.isVideo ? imageContainers : videoContainers

    for( container of containersToShow ){
      container.classList.remove('display-none')
    }
    for( container of containersToHide ){
      container.classList.add('display-none')
    }

    const srcBase = "{{ site.baseurl }}/assets/img/smtk/"
    if( match.isVideo ){
      genericVideo.getElementsByTagName('source')[0].src = srcBase + match.generic.src
      igVideo.getElementsByTagName('source')[0].src = srcBase + match.instagram.src
    }
    else {
      genericImage.src = srcBase + match.generic.src
      genericImage.alt = match.generic.alt
  
      igImage.src = srcBase + match.instagram.src
      igImage.alt = match.instagram.alt
    }
  }
})