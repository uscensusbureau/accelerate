---
---
const srcBase = "{{ site.baseurl }}/assets/img/smtk/"

const creativeResources = {{ site.data.2020-data-release.creative-resources | jsonify }}
const crSelect = document.getElementById('cr-select')
const [genericTitle, igTitle] = document.getElementsByClassName('cr-asset__title')
const [genericVideo, igVideo] = document.getElementsByClassName('cr-asset__asset--video')
const [genericImage, igImage] = document.getElementsByClassName('cr-asset__asset--image')
const videoContainers = document.getElementsByClassName('cr-asset__asset-container--video')
const imageContainers = document.getElementsByClassName('cr-asset__asset-container--image')

const imgRow = document.getElementById('img-row')
const videoRow = document.getElementById('video-row')
const guideRow = document.getElementById('guide-row')

crSelect.addEventListener('change', e => {
  const match = creativeResources.find( el => el.title === crSelect.value )
  console.log(match)
  if( match ){
    genericTitle.innerHTML = match['resource-name']
    igTitle.innerHTML = match['resource-name']

    // hide & show containers
    let containerToShow = imgRow
    let containersToHide = [ videoRow, guideRow ]
    if( match.isVideo ){
      containerToShow = videoRow
      containersToHide = [imgRow, guideRow]
    } else if ( match.isGuide ){
      containerToShow = guideRow
      containersToHide = [ imgRow, videoRow ]
    }

    containerToShow.classList.remove('display-none')
    for( container of containersToHide ){
      container.classList.add('display-none')
    }

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

/**
 * Lightbox controls
 */
const lightbox = document.getElementById("smtk-lightbox")
const lbImage = lightbox.getElementsByTagName("img")[0]
const closeButton = document.getElementById("smtk-lightbox__close")
if( closeButton ){
  closeButton.addEventListener( 'click', e => {
    e.preventDefault()
    lightbox.classList.add('display-none');
  })
}

const openLightbox = (imgUrl, imgAlt) => {
  lbImage.src = srcBase + imgUrl
  lbImage.alt = imgAlt

  lightbox.classList.remove('display-none')
}