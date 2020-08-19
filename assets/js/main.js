---

---

$(function() {
  console.log('executing');

  $('a').smoothScroll();

  $('.masonry-grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 200
  });
});


// filter
$('#video-filter-form').submit(function (e) {
  e.preventDefault();
  var selectedValues = document.getElementsByName('filter-checkbox');
  var videos = document.getElementsByClassName('video-div');
  var selectedVideos = []
  for (i = 0; i < selectedValues.length; i++) {
    for (j = 0; j < videos.length; j++ ) {
      if (videos[ j ].getElementsByClassName('language-tag')[0]) {
        videoLanguage = videos[ j ].getElementsByClassName('language-tag')[ 0 ].innerText.toLowerCase().split(' ').join("-");
      } else {
        videoLanguage = "English";
      }
      if (videos[ j ].getElementsByClassName('communities-tag')[0]) {
        videoCommunity = videos[ j ].getElementsByClassName('communities-tag')[ 0 ].innerText.toLowerCase().split(' ').join("-");
      } else {
        videoCommunity = "general";
      }
      videoID = videos[ j ].getElementsByTagName('h6')[ 0 ].innerText;
      $('#video-card-' + videoID).addClass('video-hidden');
      if (videos[ j ].getElementsByClassName('best-of-tag')[ 0 ]) {
        best = videos[ j ].getElementsByClassName('best-of-tag')[ 0 ].innerText.toLowerCase();
      } else {
        best = ''
      }
      if (selectedValues[ i ].checked == true ) {
        var communityClass = selectedValues[i].id
        $('#community-' + communityClass).removeClass('video-hidden');
        var filter = selectedValues[ i ].value.toLowerCase();
        if ( videoLanguage.includes(filter) || videoCommunity.includes(filter) || best.includes(filter) || filter.includes(videoCommunity, best )) {
          selectedVideos.push(videoID)
        }
      }
    }
  }
  console.log(selectedVideos)
  for (i = 0; i < selectedVideos.length; i++) {
    $('#video-card-' + selectedVideos[i]).removeClass('video-hidden');
  }
});


// reset filter

$('#reset-filter').click(function (e) {
  var selectedValues = document.getElementsByName('filter-checkbox');
  for (i = 0; i < selectedValues.length; i++) {
    selectedValues[i].checked = false;
  }
  var videos = document.getElementsByClassName('video-div');
  for (i = 0; i < videos.length; i++) {
    videoID = videos[ i ].getElementsByTagName('h6')[ 0 ].innerText;
    $('#video-card-' + videoID).removeClass('video-hidden');
  }
});
