---
---

$(function() {

  var options = {
    valueNames: [
      'title',
      'date',
      'awardeeName',
      'city',
      'piName',
      'amount',
      'slug',
      'abstractText'
    ]
  };

  var awardsDetailsList = new List('awards-details-list', options);
  window.awardsDetailsList = awardsDetailsList;

  var awardsLists = [
    awardsDetailsList
  ];

  if ($('#awards-details-list-phase-2').length) {
    var awardsDetailsList2 = new List('awards-details-list-phase-2', options);
    window.awardsDetailsList2 = awardsDetailsList2;
    awardsLists.push(awardsDetailsList2);
  }

  function smush(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace('&amp;', '') 
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
      .replace(/-/g, '');
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  awardsLists.forEach(function(list) {
    if (list) {
      list.filter(function(company){
        var isMatching = smush(company.values().awardeeName) == smush(getQueryVariable('company'));

        if (isMatching) {
          $listContainer = $(list.listContainer);
          $listContainer.show();
          $listContainer.find('.results-company-title').text(company.values().awardeeName);
          var listTitle = $listContainer.find('.results-company-title').text();
          $listContainer.find('.results-company-title').text(listTitle.replace('&amp;', '&'));
          $listContainer.find('.results-company-title').show();
          $listContainer.find('.results-phase').show();
        }

        return isMatching;
      });
    }
  });



  function showFailure(text) {
    var text = text || getQueryVariable('company');
    var visibleAwards = awardsLists.map(function(list) { return list.visibleItems.length > 0; })

    if (visibleAwards.indexOf(true) >= 0) {
      $('.results-failure').hide();
      $('.awards-search-form').hide();
    } else {
      $('.results-query').text(text);
      $('.results-failure').show();
      $('.awards-search-form').show();
    }
  }

  showFailure();

  $('.results-loading').hide();
  $('.results').show();

  window.searchAwards = function searchAwards(value) {
    awardsLists.forEach(function(list) {
      if (list) {
        list.filter();
        list.fuzzySearch(value);
      }
    });

    $('.results-loading').show();
    setTimeout(function(){
      $('.results-loading').hide();
      showFailure(value);
    },1);
    return false;
  }

});
