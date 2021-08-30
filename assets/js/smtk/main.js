---
---
const srcBase = "{{ site.baseurl }}/assets/img/smtk/"

// const creativeResources = {{ site.data.2020-data-release.creative-resources | jsonify }}
const areaResources = {{ site.data.smtk.Apportionment-2020-table | jsonify }}
const crSelect = document.getElementById('cr-select')

const areaSelector = document.getElementById('areaAsset__select')
const areaTitle = document.getElementById('areaAsset__title')
const areaGenImg = document.getElementById('areaAsset__img')
const areaPost = document.getElementById('areaAsset__post')

const allRows = document.getElementsByClassName('cr-asset__row')

if( crSelect ){
  crSelect.addEventListener('change', e => {
    // console.log(crSelect.value);
    for( row of allRows ){
      if( row.id == crSelect.value ){
        row.classList.remove('display-none')
      }
      else {
        row.classList.add('display-none')
        const rowVids = row.getElementsByTagName('video')
        for( video of rowVids ){
          video.pause()
        }
      }
    }
  })
}

if( areaSelector ){
  areaSelector.addEventListener( 'change', e => {
    // console.log( areaSelector.value );
    const areaName = areaSelector.value;
    areaTitle.innerText = areaName
    const match = areaResources.find( el => el.AREA === areaName )
    if( match ){
      areaPost.innerHTML = match['GENERIC-TEXT']
      const imgSrcSuffix = `States_Animations/${areaName}/USCB_50 States Data Viz_${areaName}Still001.jpg`
      areaGenImg.src = `${ srcBase }${imgSrcSuffix}`
      areaGenImg.alt = `A map of the USA with ${areaName} shaded lighter along with text indicating how much its population has changed since 2010`
  
      const imgDownload = document.getElementById('areaAsset__download--image')
      imgDownload.href = areaGenImg.src

      const vidSrc = `${srcBase}States_Animations/${areaName}/USCB_50 States Data Viz_${areaName}.mp4`
      document.getElementById('areaAsset__video').src = vidSrc
      document.getElementById('areaAsset__download--video').href = vidSrc
    }
  })

  const imgPreview = document.getElementById('areaAsset__preview')
  imgPreview.addEventListener('click', e => {
    e.preventDefault()
    const areaName = areaSelector.value;
    openLightbox(e, `States_Animations/${areaName}/USCB_50 States Data Viz_${areaName}Still001.jpg`, 
      `An image of the USA with ${areaName} shaded lighter along with data indicating how much its population has changed since 2010` )
  })
}

setContentsViaJS = function() {
  const match = creativeResources.find( el => el.title === crSelect.value )
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
      if( match.instagram ){
        igVideo.getElementsByTagName('source')[0].src = srcBase + match.instagram.src
        for( container of instaContainers ){
          container.classList.remove('display-none')
        }
      }
      else {
        for( container of instaContainers ){
          container.classList.add('display-none')
        }
      }
    }
    else {
      genericImage.src = srcBase + match.generic.src
      genericImage.alt = match.generic.alt
  
      if( match.instagram ){ 
        igImage.src = srcBase + match.instagram.src
        igImage.alt = match.instagram.alt
        for( container of instaContainers ){
          container.classList.remove('display-none')
        }
      }
      else {
        for( container of instaContainers ){
          container.classList.add('display-none')
        }
      }
    }

    // update post text
    const toPostHTML = match.post;
    containerToShow.getElementsByClassName('cr-asset__post')[0].innerHTML = toPostHTML;
  }
}

/**
 * Lightbox controls
 */
const lightbox = document.getElementById("smtk-lightbox")
const lbImage = lightbox.getElementsByTagName("img")[0]
const lbContent = lightbox.getElementsByClassName('smtk-lightbox__content')[0]
const closeButton = document.getElementsByClassName("smtk-lightbox__close")[0]

// handlers to help trap focus on the lightbox
// https://allyjs.io/tutorials/accessible-dialog.html#trapping-focus-inside-the-dialog
let disableHandler;
let tabHandler;
let keyHandler;
let focusedOnBeforeOpen;

const openLightbox = (evt, imgUrl, imgAlt) => {
  evt.preventDefault()
  focusedOnBeforeOpen = document.activeElement
  disableHandler = ally.maintain.disabled({
    filter: lightbox
  })
  tabHandler = ally.maintain.tabFocus({
    context: lightbox,
  });
  keyHandler = ally.when.key({
    escape: closeLightbox
  })

  lbImage.src = srcBase + imgUrl
  lbImage.alt = imgAlt

  lightbox.hidden = false
  lbContent.focus()
}

const closeLightbox = evt => {
  evt.preventDefault()
    
  keyHandler.disengage()
  tabHandler.disengage()
  disableHandler.disengage()
  focusedOnBeforeOpen.focus()

  lightbox.hidden = true
}

if( closeButton ){
  closeButton.addEventListener( 'click', closeLightbox)
}
