
function rePosition(){
  var width = document.documentElement.clientWidth || document.body.clientWidth;
  var ratio = width/750;
  if(width<=750){
      document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
  }else{
      document.getElementsByTagName('html')[0].style.fontSize="100px";
  }
}
rePosition();
window.onresize = function(){
  rePosition();
};


// $(document).ready(
//   function () { 
//        $('.slide2').css({'height':$(window).innerHeight()})
// }
// )

$(document).ready(function () { $('body').css({'height':$(window).height()})});
window.onload = function () {
  var u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
      // 拿到获取焦点的input
      let input = document.querySelector('input')
      input.addEventListener('focus', function () {
          setInterval(function () {
          // 核心
              input.scrollIntoView(false);
          }, 200)
      })
  }
}
          

$(function () {
  // 音频
  var bgm = new Audio();
    bgm.src = 'music/BGM.mp3';
    $('body').on("click", '#bgm_icon', function () {
      if (bgm.paused) {
        $(this).addClass('ing')
        bgm.play();
      } else {
        $(this).removeClass('ing')
        bgm.pause();
      }
   });
// IOS和安卓切换
 $('.register_select div').click(function(){
    $('.register_select div').children().removeClass('active');
    $(this).addClass('active');
    $(this).siblings('div').removeClass('active');
  })

  // 注册框里面获取焦点
 $(".text_content1").focus(function(){
  if($(this).val()=='휴대폰 번호를 입력 （-없이 입력)'){
    $(this).val("")
    }
  });
  $(".text_content1").blur(function(){
  if($(this).val()==''){
    $(this).val("휴대폰 번호를 입력 （-없이 입력)")
  }
  })




//点击menu弹出菜单栏
$('body').on("click", '.common_menu', function () {
  $('.sidebar_box').toggleClass('active')
});
$('body').on("click", '.sidebar_box .closed', function () {
  $('.sidebar_box').removeClass('active')
});




//part2法律提示1
$('.law_text1').click(function(){
  $(' .masked').css('display','block');
$('.tc_text_tip_wrap').css('display','block');
})
$('.tc_text_tip_wrap .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})

//part2法律提示2
$('.law_text2').click(function(){
  $(' .masked').css('display','block');
$('.tc_msg_bg_wrap').css('display','block');
})
$('.tc_msg_bg_wrap .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})
//预注册成功
$('.register_yy_btn').click(function(){
  $(' .masked').css('display','block');
$('.tc_success_big').css('display','block');
})
$('.tc_main_big .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})


     

 /*弹窗框关闭按钮*/
$('.tc_msg_bg_wrap .closed').click(function(){
  $('.tc_msg_bg_wrap').css('display','none');
})
$('.tc_text_tip_wrap .closed').click(function(){
  $('.tc_text_tip_wrap').css('display','none');
})
$('.tc_success_big .closed').click(function(){
  $('.tc_success_big').css('display','none');
})

 /*part8--花灵*/ 
var flowerswiper = new Swiper('.part8_swiper',{
    loop:true, initialSlide: 7,
    slideToClickedSlide: true,
    slidesPerView: 4,
    freeMode: true,watchSlidesProgress: true,
    navigation: {
      nextEl: '.part8_menu  .swiper-button-next',
      prevEl: '.part8_menu .swiper-button-prev',
},
on: {
  resize: function () {
          setTimeout(function(){
            flowerswiper.update()
          },500)
          
    },
  slideChangeTransitionEnd:function(flowerswiper){ 
        var index = this.realIndex;
          //role.slideTo(swiper1.realIndex);
        $('.role .content_tro dd').eq(index).fadeIn().siblings().hide();
          var dd = $('.role .content_tro dd').eq(index);
        //  console.log(dd.length)
            $('.role .content_tro dd').hide()
            dd.show();
          //  dd.find('.role_name').addClass('animated fadeInDown');
          //  dd.find('.role_people').addClass('animated fadeInUp');
          //  dd.find('.note').addClass('animated fadeInRight');
        },
      },
});

// 视频特色
var swiper = new Swiper('.page5_swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    loop : true,
    initialSlide :0,
    navigation: {
        nextEl: '.page5_swiper .swiper-button-next',
        prevEl: '.page5_swiper .swiper-button-prev',
        },
    nextEl: '.page5_swiper .swiper-button-next',
    prevEl: '.page5_swiper .swiper-button-prev',
});
// 角色特色
var swiper = new Swiper('.page7_swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    loop : true,
    initialSlide :0,
    navigation: {
        nextEl: '.page7_swiper .swiper-button-next',
        prevEl: '.page7_swiper .swiper-button-prev',
        },
    nextEl: '.page7_swiper .swiper-button-next',
    prevEl: '.page7_swiper .swiper-button-prev',
});

})

