var swiper = new Swiper(".mySwiper", {
   loop: true,
   spaceBetween: 10,
   slidesPerView: 6,
   freeMode: true,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
 });
 var swiper2 = new Swiper(".mySwiper2", {
   loop: true,
   spaceBetween: 10,
   // navigation: {
   //   nextEl: ".swiper-button-next",
   //   prevEl: ".swiper-button-prev",
   // },
   thumbs: {
     swiper: swiper,
   },
 });