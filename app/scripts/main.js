$(function() {
	//$('section').height($(window).height());

  if ($(window).width() > 767) {
    $('section').height($(window).height());
  }

  $('a[href*=#]:not([href=#]).navi').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  var speed = 'medium';

  $('html, body').hide();

  $(document).ready(function() {
      $('html, body').fadeIn(speed, function() {
          $('a[href]:not([target=_blank])').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
              window.location = url;
          });
       });
    });
  });
});

$(document).resize(function () {
  if ($(window).width() > 767) {
    $('section').height($(window).height());
  }
});