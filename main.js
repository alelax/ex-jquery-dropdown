$(document).ready(function(){

// alert("ciao");
   $('.nav-items').mouseenter(function() {
      $(this).children('.dropdown-ctn').slideDown(500);
   });
   $('.nav-items').mouseleave(function() {
      $(this).children('.dropdown-ctn').slideUp(500);
   });

   $('.second-l-items').mouseenter(function() {
      $(this).children('.sub-dropdown-ctn')
             .css("display", "flex")
             .hide()
             .fadeIn(500);//addClass('visible');
   });

   $('.second-l-items').mouseleave(function() {
      $(this).children('.sub-dropdown-ctn').fadeOut();//addClass('visible');
   });



});
