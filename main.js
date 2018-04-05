$(document).ready(function(){

// alert("ciao");
   $('.nav-items').mouseenter(function() {
      $(this).children('.dropdown-ctn').slideDown(500);
   });
   $('.nav-items').mouseleave(function() {
      $(this).children('.dropdown-ctn').slideUp(500);
   });

   // $('.second-l-items').mouseenter(function() {
   //    $(this).children('.sub-dropdown-ctn').addClass('visible');
   // });

});
