var count = 0;
var screen_width = window.parent.screen.width;

window.onload = function() {
  setInterval('unchi()', 1);
}

function unchi() {
  count += 1;
  $('#scroll_1').css({
    "margin-left": count     
  });
  if(count >= screen_width*2) {
    count = 0;
  }
}

window.addEventListener("scroll", function() {
  var y = window.pageYOffset;
/*
  $('#object00').css({
    "margin-left": window.innerWidth*-0.2 + y*0.3
  });
  $('#object01').css({
    "margin-left": window.innerWidth*0.8 - y*0.3
  });
*/

  if (window.parent.screen.width > 768){
    artist_move('artist0', 'left');
    artist_move('artist1', 'right');
  } else {
    smartphone_margin('artist0');
    smartphone_margin('artist1');

  }

  function artist_move(artist_id, direction) {
    var targetElement = document.getElementById(artist_id);
    var clientRect = targetElement.getBoundingClientRect();
    if (direction == 'left') {
      if (clientRect.top - window.parent.screen.height < 0) {
        $('#' + artist_id).css({
          "margin-left": clientRect.top
        });
      }
    }
    if (direction == 'right') {
      if (clientRect.top - window.parent.screen.height < 0) {
        $('#' + artist_id).css({
          "margin-left": window.parent.screen.width*0.3-clientRect.top
        });
      }
    }
  }

  function smartphone_margin(artist_id) {
    $('#' + artist_id).css({
      "margin-left": window.parent.screen.width*0.2
    });
  }
});
