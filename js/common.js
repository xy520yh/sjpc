// 手机端设备配置
var jsVer = 15;
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 768;

var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
	var version = parseFloat(RegExp.$1);
	// andriod 2.3
	if (version > 2.3) {
		document.write('<meta name="viewport" content="width=768, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
		// andriod 2.3以上
	} else {
		document.write('<meta name="viewport" content="width=768, target-densitydpi=device-dpi">');
	}
	// 其他系统
} else {
	document.write('<meta name="viewport" content="width=768, user-scalable=no, target-densitydpi=device-dpi">');
}
// 导航菜单栏展开

//游戏特色手机轮播图
var swiper3 = new Swiper('.phone_swiper', {
    spaceBetween: 0,
    pagination: {
        clickable: true,
    el: '.swiper-feature',
    },
    centeredSlides: true,
    loop:true,
   
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    navigation: {
    nextEl: '.phone_banner .swiper-button-next',
    prevEl: '.phone_banner .swiper-button-prev',
    },
    });
 //花零
 (function(){
    var roleswiper = new Swiper('.roles_wrap', {
        noSwiping : true,
       //loop : true,
        effect : 'fade',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        onSlideChangeStart:function(swiper){
            var length = $(".game_roles .swiper_dock_list li").length;
            $(".game_roles .swiper_dock_list li img").removeClass('on');
            $(".game_roles .swiper_dock_list li img").eq((swiper.activeIndex-1)%length).addClass('on');
        }
    });
    $(".game_roles .swiper_dock_list li").click(function(){
        var index = $(this).index();
        roleswiper.slideTo(index);
        $(".game_roles .swiper_dock_list li img").removeClass('on');
        $(".game_roles .swiper_dock_list li img").eq(index).addClass('on');
    });
})();
//角色
var swiper1 = new Swiper('.page5_tro_swiper',{
    pagination: {
        el: '.page5_pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><image src="images/phone_role' + ( index  + 1 ) + '_small.png"></span>';
        },
   },
});
// 特色
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


$(function(){
    //导航切换到对应屏幕
    $(".nav_lis1 a").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
	$('.nav_04').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section4').offset().top}, 500);
	});
	$('.nav_05').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section5').offset().top}, 500);
    });
    $('.nav_06').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section6').offset().top}, 500);
    });
    $('.nav_07').click(function(){
		jQuery('html,body').animate({scrollTop:$('#section7').offset().top}, 500);
	});
    

    $("#top-back").click(function(){
        jQuery("html,body").animate({scrollTop:0},1000);
    });	
    //返回顶部
    $('#top-back').hide()
    $(window).scroll(function(){
        if($(this).scrollTop() > 350){
            $("#top-back").fadeIn();
        }
        else{
            $("#top-back").fadeOut();
        }
    })
    //弹窗
    $('.sure_btn_cn').click(function(){
        $('.masked').css('display','block');
       $('.tc_succes').css('display','block');
       $('.login_box').removeClass('box_shodow');
     })

     $('.closed').click(function(){
        $(this).parent().css('display','none');
        $('.masked').css('display','none');
    })
    $('.send').click(function(){
        console.log('1');
        $('.login_box').addClass('box_shodow');
        
       
    })
});  

function openNav(e) {
    document.getElementById("mySidenav").style.width = "529px";
    e = e || event; stopFunc(e);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
document.getElementById("mySidenav").onclick=function(e){
      e = e || event; stopFunc(e);}


//语言栏目展开





