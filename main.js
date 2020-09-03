$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


//scroll
/*$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;

	$('html, body').animate({
			scrollTop: targetOffset - 60
	}, 500);
});

/*
<script>
jquery(document).ready(function($){
  $(".nav .navbar-nav").click(function(event){
    event.prevent.Default();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  });
});
</script>*/