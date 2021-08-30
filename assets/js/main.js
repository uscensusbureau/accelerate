---

---

$(function() {
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


    // for callout image text fade in
    for(let i = 1; i <= 6; i++) {
      const element = document.getElementById(`callout-${i}`)
      if (element) {
        if ((element.getBoundingClientRect().top + window.scrollY) - ($(window).scrollTop()) < 200 ) {
          const span = document.querySelector(`#callout-text-${i} span`)
          if (span) {
            span.style.opacity = "1.0"
          }
        }
      }
    }

    //  for map viz - fade in by year

    $(".accelerate").addClass("blue");

    var topOfMap = $(".map-viz").offset() ? $(".map-viz").offset().top : 0;

    if (($(window).scrollTop() - topOfMap) / 1500  > 1 ) {
      $(".2018").addClass("yellow")
      $("#map-header-2").removeClass("hidden")
      $("#map-header-1").addClass("hidden")
      $("#map-header-3").addClass("hidden")

    }

    if (($(window).scrollTop() - topOfMap) / 3000  > 1 ) {
      $(".2019").addClass("yellow")
      $("#map-header-3").removeClass("hidden")
      $("#map-header-2").addClass("hidden")
      $("#map-header-4").addClass("hidden")

    }

    if (($(window).scrollTop() - topOfMap) / 5000  > 1 ) {
      $(".2020").addClass("yellow")
      $("#map-header-4").removeClass("hidden")
      $("#map-header-3").addClass("hidden")
    }

    if (document.getElementsByClassName('map-logo-garden').length > 0) {
      var topOfLogoGarden = $(".map-logo-garden").offset().top;
      if (($(window).scrollTop() - topOfLogoGarden) == 0) {
        $(".map-logo-garden").css("opacity", 1)
        window.setTimeout(function() {
          $("#map-logo-garden-hr").css("opacity", 0.7)
          $(".map-logo-garden").find("h4").css("opacity", 1)
          $("#rtv").css("opacity", 1);
          $("#neue-south").css("opacity", 1);
        }, 2000);
        window.setTimeout(function() {
          $("#voto-latino").css("opacity", 1);
          $("#shake-shack").css("opacity", 1);
        }, 4000);
        window.setTimeout(function() {
          $("#utep").css("opacity", 1);
          $("#united").css("opacity", 1);
        }, 6000);
        window.setTimeout(function() {
          $("#lincoln-center").css("opacity", 1);
          $("#pflag").css("opacity", 1);
        }, 8000);
        window.setTimeout(function() {
          $("#la2050").css("opacity", 1);
          $("#ct-counts").css("opacity", 1);
        }, 10000);
      }
    }

//  theory of change
  if (document.getElementById('slide-2')) {

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
  }


// prize winners
    if (document.getElementById('gotc-slide-1')) {

      var gotcSlideContainerTop = $("#gotc-slide-1").offset().top;

      var topOfGOTCSlide2 = $("#gotc-slide-2").offset().top;

      if (topOfGOTCSlide2 == gotcSlideContainerTop && topOfGOTCSlide3 !== gotcSlideContainerTop) {
        $("#gotc-slide-1").find(".body").css("opacity", 0)
        $("#gotc-slide-1").find(".header").css("opacity", 0)
        $("#gotc-slide-2").css("opacity", 1)
        window.setTimeout(function() {
          $("#gotc-slide-2").find("p", "a", "img").css("opacity", 1);
        }, 1000);
      } else {
        $("#gotc-slide-2").css("opacity", 0)
        $("#gotc-slide-1").find(".body").css("opacity", 1)
        $("#gotc-slide-1").find(".header").css("opacity", 1)
        $("#gotc-slide-1").find("p", "a", "img").css("opacity", 1);
      }

      var topOfGOTCSlide3 = $("#gotc-slide-3").offset().top;
      if (topOfGOTCSlide3 == gotcSlideContainerTop) {
        $("#gotc-slide-2").find(".body").css("opacity", 0)
        $("#gotc-slide-2").find(".header").css("opacity", 0)
        $("#gotc-slide-3").css("opacity", 1)
        window.setTimeout(function() {
          $("#gotc-slide-3").find("p", "a", "img").css("opacity", 1);
        }, 1000);
      } else {
        $("#gotc-slide-3").css("opacity", 0)
        $("#gotc-slide-2").find(".body").css("opacity", 1)
        $("#gotc-slide-2").find(".header").css("opacity", 1)
        $("#gotc-slide-2").find("p", "a", "img").css("opacity", 1);
      }
    }

  });
});


function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function(){
      var thisPos = $(this).offset().top;
      var elementHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();
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
