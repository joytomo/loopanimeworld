var count = 0;
var screen_width = window.parent.screen.width;

window.onload = function() {
  setInterval('counter()', 10);
  setInterval('slide_start("right")', 10);
  setInterval('slide_start("left")', 10);
}

function counter() {
  count += 1;
  if(count >= screen_width*1.5) {
    count = 0;
  }
}

function slide_start(direction) {
  move = direction == 'right' ? count : -count;
  $('.slider-' + direction).css({
      "margin-left": move
  });
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
    artist_move('artist2', 'left');
    artist_move('artist3', 'right');
    artist_move('artist4', 'left');
    artist_move('artist5', 'right');
    artist_move('artist6', 'left');
  } else {
    smartphone_margin('artist0');
    smartphone_margin('artist1');
    smartphone_margin('artist2');
    smartphone_margin('artist3');
    smartphone_margin('artist4');
    smartphone_margin('artist5');
    smartphone_margin('artist6');
  }

  function artist_move(artist_id, direction) {
    var targetElement = document.getElementById(artist_id);
    var clientRect = targetElement.getBoundingClientRect();
    if (direction == 'left') {
      if (clientRect.top - window.parent.screen.height < 0) {
        $('#' + artist_id).css({
          "margin-left": -window.parent.screen.width*0.1+clientRect.top
        });
      }
    }
    if (direction == 'right') {
      if (clientRect.top - window.parent.screen.height < 0) {
        $('#' + artist_id).css({
          "margin-left": window.parent.screen.width*0.1-clientRect.top
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
