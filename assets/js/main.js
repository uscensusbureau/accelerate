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
  if (selectedValues.length > 0 ) {
    $('#view-more-default').addClass('video-hidden');
    $('#view-more-sorted').removeClass('video-hidden');
  }
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
        var filterClass = selectedValues[i].id
        $('#filter-' + filterClass).removeClass('video-hidden');
        var filter = selectedValues[ i ].value.toLowerCase();
        if ( videoLanguage.includes(filter) || videoCommunity.includes(filter) || best.includes(filter) || filter.includes(videoCommunity, best )) {
          selectedVideos.push(videoID)
          var tags = $('#filter-' + filterClass).find('span.tag')
          tags.map(function(x){
            // console.log(tags[x])
            if (tags[x].innerText.toLowerCase() == filterClass) {
              $(this).addClass('tag-selected')
            }
          })
          var topPicksTags = $('#video-card-' + videoID).find('span.tag')
          topPicksTags.map(function(x){
            console.log(topPicksTags[x])
            if (topPicksTags[x].innerText.toLowerCase() == filterClass) {
              $(this).addClass('tag-selected')
            }
          })
        }
      }
    }
  }
  for (i = 0; i < selectedVideos.length; i++) {
    $('#video-card-' + selectedVideos[i]).removeClass('video-hidden');
  }
});


// reset filter

$('#reset-filter').click(function (e) {
  var selectedValues = document.getElementsByName('filter-checkbox');
  for (i = 0; i < selectedValues.length; i++) {
    selectedValues[i].checked = false;
    var communityClass = selectedValues[i].id
    $('#community-' + communityClass).addClass('video-hidden');
  }
  var videos = document.getElementsByClassName('video-div');
  for (i = 0; i < videos.length; i++) {
    videoID = videos[ i ].getElementsByTagName('h6')[ 0 ].innerText;
    $('#video-card-' + videoID).removeClass('video-hidden');
  }
  $('#view-more-sorted').addClass('video-hidden');
  $('#view-more-default').removeClass('video-hidden');
});
