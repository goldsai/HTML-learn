$(document).ready(function(){
   $('.spoiler__text').hide();
   // $('#txt').show();
   $('#font').show();
   $('.spoiler__title').click(function(event){
      if($('.spoiler').hasClass('spoiler-one')){
         $('.spoiler__title').not($(this)).removeClass('spoiler-active');
         $('.spoiler__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('spoiler-active').next().slideToggle(300);

   });
});