---

---

$(function() {
  console.log('executing');

  $('a').smoothScroll();

  $('.masonry-grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 200
  });


  $(window).scroll(function(){
    //  for hero section
    offsetSlowest = window.setTimeout(function() {
      $(".slowest").css("opacity", 0 + $(window).scrollTop() / 8000);
  	}, 7500);
    $(".slower").css("opacity", 0 + $(window).scrollTop() / 5000);
    offsetSlow= window.setTimeout(function() {
      $(".slow").css("opacity", 0 + $(window).scrollTop() / 2500);
  	}, 4000);
    offsetFast = window.setTimeout(function() {
      $(".fast").css("opacity", 0 + $(window).scrollTop() / 1000);
  	}, 1000);
    $(".fastest").css("opacity", 0 + $(window).scrollTop() / 200);

    //  for map viz - fade in by year

    $(".accelerate").addClass("blue");

    var topOfMap = $(".map-viz").offset().top;

    if (($(window).scrollTop() - topOfMap) / 1500  > 1 ) {
      $(".2018").addClass("yellow")
      $("#map-header-2").removeClass("hidden")
      $("#map-header-1").addClass("hidden")
    }

    if (($(window).scrollTop() - topOfMap) / 3000  > 1 ) {
      $(".2019").addClass("yellow")
      $("#map-header-3").removeClass("hidden")
      $("#map-header-2").addClass("hidden")
    }

    if (($(window).scrollTop() - topOfMap) / 5000  > 1 ) {
      $(".2020").addClass("yellow")
      $("#map-header-4").removeClass("hidden")
      $("#map-header-3").addClass("hidden")
    }

    var topOfSlide2 = $("#slide-2").offset().top;
    if (($(window).scrollTop() - topOfSlide2) == 0) {
      $("#slide-2").css("opacity", 1)
      window.setTimeout(function() {
        $("#slide-2").find("p", "b").css("opacity", 1);
        $(".theory-of-change-number-transparent").css("opacity", 1);
        $(".hr-transparent").css("opacity", 1);
    	}, 1000);
    }
    if (($(window).scrollTop() - topOfSlide2) < 0) {
      $("#slide-2").css("opacity", 0)
    }

    var topOfSlide3 = $("#slide-3").offset().top;
    if (($(window).scrollTop() - topOfSlide3) == 0) {
      $("#slide-3").css("opacity", 1)
      window.setTimeout(function() {
        $("#slide-3").find("p", "b").css("opacity", 1);
        $(".theory-of-change-number-transparent").css("opacity", 1);
        $(".hr-transparent").css("opacity", 1);
    	}, 1000);
    }
    if (($(window).scrollTop() - topOfSlide3) < 0) {
      $("#slide-3").css("opacity", 0)
    }

  });
});


function showImages(el) {
  var windowHeight = jQuery( window ).height();
  // console.log("window height", windowHeight);
  $(el).each(function(){
      var thisPos = $(this).offset().top;
      // console.log("position", thisPos);
      var elementHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();
      console.log("element height", elementHeight);
      if (topOfWindow + windowHeight - elementHeight > thisPos ) {
          $(this).addClass("fadeIn");
      }
      if (topOfWindow + windowHeight + 500 > thisPos ) {
          $(this).addClass("fadeOut");
      }
  });
}


$(window).scroll(function() {
    showImages('#data-viz-1');
});

$(window).scroll(function() {
    showImages('#data-viz-2');
});


// filter
$('#video-filter-form').submit(function (e) {
  e.preventDefault();
  var selectedValues = document.getElementsByName('filter-checkbox');
  var videos = document.getElementsByClassName('video-div');
  var selectedVideos = [];
  var filterClasses = [];
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
        var filter = selectedValues[i].id
        filterClasses.push(filter)
        $('#filter-' + filter).removeClass('video-hidden');
        if ( videoLanguage.includes(filter) || videoCommunity.includes(filter) || best.includes(filter) || filter.includes(videoCommunity, best )) {
          selectedVideos.push(videoID)
        }
      }
    }
  }
  for (i = 0; i < selectedVideos.length; i++) {
    $('#video-card-' + selectedVideos[i]).removeClass('video-hidden');
    var topPicksTags = $('#video-card-' + selectedVideos[i]).find('span.tag')
    topPicksTags.map(function(x) {
      if (filterClasses.includes(topPicksTags[x].innerText.toLowerCase().split(' ').join('-'))) {
        $(this).addClass('tag-selected')
      }
    })
    var seeAllTags = $('#view-more-sorted').find('span.tag')
    seeAllTags.map(function(x) {
      if (filterClasses.includes(seeAllTags[x].innerText.toLowerCase().split(' ').join('-'))) {
        $(this).addClass('tag-selected')
      }
    })
  }
});


// reset filter

$('#reset-filter').click(function (e) {
  var selectedValues = document.getElementsByName('filter-checkbox');
  for (i = 0; i < selectedValues.length; i++) {
    var communityClass = selectedValues[i].id
    selectedValues[i].checked = false;
    $('#filter-' + communityClass).addClass('video-hidden');
  }
  var videos = document.getElementsByClassName('video-div');
  for (i = 0; i < videos.length; i++) {
    videoID = videos[ i ].getElementsByTagName('h6')[ 0 ].innerText;
    $('#video-card-' + videoID).removeClass('video-hidden');
  }
  $("#view-more-sorted span").removeClass("tag-selected");
  $("#view-more-default span").removeClass("tag-selected");
  $(".video-grid span").removeClass("tag-selected");
  $('#view-more-sorted').addClass('video-hidden');
  $('#view-more-default').removeClass('video-hidden');
});
