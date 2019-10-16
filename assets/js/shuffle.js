$(function() {

  var $shuffledLists = document.querySelectorAll('.shuffled-list');

  $shuffledLists.forEach(function(list){
    for (var i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[Math.random() * i | 0]);
    }
  });
});
