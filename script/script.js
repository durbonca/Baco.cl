time_delivery = document.getElementById("time-delivery");
time_delivery.addEventListener("click", activate);
time_delivery.addEventListener("touchstart", activate);

function activate() {
    time_delivery.classList.add("unactive-horarios");
    time_delivery.classList.remove("active-horarios");
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true
});

$('#panelPrecios [data-toggle="tooltip"]').tooltip({
    animated: "fade",
    placement: "bottom",
    html: true
});

//To add color to each button when scroll, but without the boulangerie it bugs.
// $(window).scroll(function() {
//   var wScroll = $(this).scrollTop();
//   if (wScroll + 80 > $('#anc-boulangerie').offset().top - ($(window).height())) {
//     $('#btn-boulangerie').addClass('selected-nav');
//     $('#btn-boutique').removeClass('selected-nav');
//     $('#btn-restaurant').removeClass('selected-nav');
//   }
//   else if (wScroll > $('#anc-boutique').offset().top - ($(window).height() / 1)) {
//     $('#btn-boulangerie').removeClass('selected-nav');
//     $('#btn-boutique').addClass('selected-nav');
//     $('#btn-restaurant').removeClass('selected-nav');
//   }
//   else if (wScroll > $('#anc-restaurant').offset().top - ($(window).height() / 1)) {
//     $('#btn-boulangerie').removeClass('selected-nav');
//     $('#btn-boutique').removeClass('selected-nav');
//     $('#btn-restaurant').addClass('selected-nav');
//   }
// });

// Select all links with hashes
/* 
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 20
                }, 600, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// For async img loading
echo.init(); */