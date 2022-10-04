

 
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
$(function () {
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
$('body').on("click", ".common_menu", function () {
  $('.nav_box').toggleClass('active');

});
$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active');
});


$('.register_yy_btn').click(function(){
  $(' .masked').css('display','block');
$('.tc_success_big').css('display','block');
})
$('.tc_main_big .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})
})
// $(function () {
//   var bgm = new Audio();
//     bgm.src = 'music/BGM.mp3';
//     $('body').on("click", '#bgm_icon', function () {
//       if (bgm.paused) {
//         $(this).addClass('ing')
//         bgm.play();
//       } else {
//         $(this).removeClass('ing')
//         bgm.pause();
//       }
//    });
// // IOS和安卓切换
//  $('.register_select div').click(function(){
//     $('.register_select div').children().removeClass('active');
//     $(this).addClass('active');
//     $(this).siblings('div').removeClass('active');
//   })

//   // 注册框里面获取焦点
//  $(".text_content1").focus(function(){
//   if($(this).val()=='휴대폰 번호를 입력 （-없이 입력)'){
//     $(this).val("")
//     }
//   });
//   $(".text_content1").blur(function(){
//   if($(this).val()==''){
//     $(this).val("휴대폰 번호를 입력 （-없이 입력)")
//   }
//   })


// //点击侧边栏
// $('body').on("click", '.menu', function () {
//   $('.sidebar_box').toggleClass('active')
// });
// $('body').on("click", '.sidebar_box .closed', function () {
//   $('.sidebar_box').removeClass('active')
// });
// });




$('.register_yy_btn').click(function(){
  $(' .masked').css('display','block');
$('.tc_success_big').css('display','block');
})
$('.tc_main_big .closed').click(function(){
  $(this).parent().parent().css('display','none');
  $('.masked').css('display','none');
})
//点击menu弹出菜单栏
$('body').on("click", ".part1_menu,.list_menu", function () {
  $('.nav_box').toggleClass('active');
});
$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active');
});
// //点击立即预约弹窗
// $('.part2_register_btn').click(function(){
//   $('.masked').css('display','block');
//   $('.tc_register').css('display','block');
// })
// $('.closed').click(function(){
//   $(this).parents('.tc_register').css('display','none');
//   $('.masked').css('display','none');
// })
// $('.masked').click(function(){
//   $('.tc_register').css('display','none');
//   $('.masked').css('display','none');
// })



// // 注册框里面切换
// $('.register ul li').mouseover(function(){
//   $(this).addClass('active').siblings().removeClass('active');
//   $(".conText").eq($(this).index()).show().siblings(".conText").hide();
// })
// // 注册框里面获取焦点
//  $(".text_content1").focus(function(){
//   if($(this).val()=='Enter email address'){
//     $(this).val("")
//     }
//   });
//   $(".text_content1").blur(function(){
//   if($(this).val()==''){
//     $(this).val("Enter email address")
//   }
//   })
//   $(".text_content3").focus(function(){
//   if($(this).val()=='Verification Codes'){
//     $(this).val("")
//     }
//   });
//   $(".text_content3").blur(function(){
//   if($(this).val()==''){
//     $(this).val("Verification Codes")
//   }
//   })













    





