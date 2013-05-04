/* Slider Options */
$(window).load(function(){
  new fwslider().init({
    duration: "1000", /* Fade Speed (miliseconds) */
    pause:    "12000"  /* Autoslide pause between slides (miliseconds)*/
  });
});

/* Sticky Navigation Menu */
$(window).load(function(){
  $("header").sticky({ topSpacing: 0 });
});

/* One Page Scrolling */
$(document).ready(function() {
  $('header nav ul').onePageNav({
    begin: function() {
    },
    end: function() {
    },
    scrollOffset: 40
  });
});

/* Skill Bars */
$(document).ready(function(){

  setTimeout(function(){

    $('.skill-bar .skill-bar-content').each(function() {
      var me = $(this);
      var perc = me.attr("data-percentage");

      var current_perc = 0;

      var progress = setInterval(function() {
        if (current_perc>=perc) {
          clearInterval(progress);
        } else {
          current_perc +=1;
          me.css('width', (current_perc)+'%');
        }

        me.text((current_perc)+'%');

      }, 10);

    });

  },10);

});

/* Isotope Portfolio */
$(window).load(function() {

  var $container = $('#portfolio-container');

  $container.isotope({
    itemSelector: '.item',
    layoutMode: 'masonry'
  });

  var $optionSets = $('.option-set'),
  $optionLinks = $optionSets.find('li');

  $optionLinks.click(function() {
    var $this = $(this);
    // don't proceed if already selected
    if ($this.hasClass('selected')) {
      return false;
    }
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');
  });

  $('#filters').on('click', 'a', function() {
    var selector = $(this).data('filter');
    $container.isotope({filter: selector});

  });

});

/* Lightbox */
jQuery(function($) {
  $(".swipebox").swipebox();
});

/* Custom Select Menu in Contact Form */
$( function() {

  $( '#cd-dropdown' ).dropdown( {
    gutter : 0
  } );

});

/* Responsive Menu */
$(function() {
  var pull    = $('.pull');
  menu    = $('nav ul');
  menuHeight  = menu.height();

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});

/* Testimonials Rotator */
$(document).ready(function() {
  $('.testimonials ul li').quovolver();
});
