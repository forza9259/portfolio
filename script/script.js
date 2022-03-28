$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    navigation: true,
    scrollHorizontally: true,
    anchors:['section1','section2','section3','section4','section5']
    
});
//methods
$.fn.fullpage.setAllowScrolling(true);



var swiper = new Swiper(".mySwiper", {
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
on: {
    slideChange: function () {
        if($('.swiper-button-next').hasClass('swiper-button-disabled')){
            $('.licenceTitle').show();
            $('.aboutmeTitle').hide();
        }else{
            $('.licenceTitle').hide();
            $('.aboutmeTitle').show();
        }
    }
}
});

$('.swiper-button-next').on('click',function(){
  $('.licenceTitle').show();
  $('.aboutmeTitle').hide();
})
$('.swiper-button-prev').on('click',function(){
  $('.licenceTitle').hide();
  $('.aboutmeTitle').show();
})

$('.skill_container>div>div').on('mouseover',function(){
     let index = $(this).index();
     $(this).children('div').eq(0).stop().animate({'opacity':'0'})
     $(this).children('div').eq(1).stop().animate({'opacity':'1'})
    //  $(this).children('div').eq(0).hide();
    //  $(this).children('div').eq(1).show();
})
$('.skill_container>div>div').on('mouseout',function(){
     let index = $(this).index();
     $(this).children('div').eq(0).stop().animate({'opacity':'1'})
     $(this).children('div').eq(1).stop().animate({'opacity':'0'})
    // $(this).children('div').eq(0).show();
    // $(this).children('div').eq(1).hide();
})
//   $('.skill_container>div>div').on('mouseover',function(){
//     $('.column').animate({'opacity':'0'})
//     $('.row').animate({'opacity':'1'})
//   })