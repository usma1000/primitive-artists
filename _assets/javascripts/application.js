//= require_self

// Initialize fluidbox

$(function () {
  $('.fluidbox-trigger').fluidbox();
})

// Initialize scrollreveal

window.sr = ScrollReveal({ reset: false });
sr.reveal('.reveal', {
  distance: '0',
  duration: 500,
  easing: 'ease-in-out',
  origin: 'top',
  scale: 1,
  reset: false,
  viewFactor: 0
});
sr.reveal('.img-reveal', {
  origin: 'bottom',
  distance: '100px',
  duration: 300,
  easing: 'ease-in-out'
});

$('.js-tilt').tilt({
    maxTilt: 10,
    perspective: 1000
});

var rellax = new Rellax('.rellax');
