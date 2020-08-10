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
  console.log("hello world")
  var selectedValues = document.getElementsByName('filter-checkbox');
  var videos = document.getElementsByClassName('video-div');
  for (i = 0; i < selectedValues.length; i++) {
    for (j = 0; j < videos.length; j++ ) {
      videoLanguage = videos[ j ].getElementsByTagName('h4')[ 0 ].innerText.toLowerCase().split(' ').join("-");
      videoCommunity = videos[ j ].getElementsByTagName('h5')[ 0 ].innerText.toLowerCase().split(' ').join("-");
      videoID = videos[ j ].getElementsByTagName('h6')[ 0 ].innerText;
      if (videos[ j ].getElementsByClassName('best-of') && videos[ j ].getElementsByClassName('best-of')[ 0 ]) {
        best = videos[ j ].getElementsByClassName('best-of')[ 0 ].innerText.toLowerCase();
      } else {
        best = null
      }
      if (selectedValues[ i ].checked == true ) {
        var filter = selectedValues[ i ].value.toLowerCase();
        if ( videoLanguage.includes(filter) || videoCommunity.includes(filter) || best == filter || filter.includes(videoCommunity)) {
          console.log(best, filter)
          $('#video-card-' + videoID).removeClass('video-hidden');
        } else {
          $('#video-card-' + videoID).addClass('video-hidden');
        }
      }
    }
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
