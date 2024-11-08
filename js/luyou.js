// 设置导航条的下拉菜单通栏显示
// $(function(){
// 获取ul标签在浏览器的水平位置
// var left = $(".tt_navbar_nav").offset().left;
// 获取可视区的宽度
// var width = window.innerWidth;
// 设置“目的地”的下拉菜单的宽度
// $(".tt_menu").css("width",width);
// })

// JS 监听页面尺寸的变化
// window.addEventListener('resize',function(){

// })


// 轮播图间隔的时间
$(function () {
    // console.log("test")
    // $('.index_banner').carousel({
    //     interval: 1000
    // })
    $('.index_banner').carousel(1000);
})

// // 旅行类型中的轮播图
// // 创建swiper实例
// var mySwiper = new Swiper('.swiper', {
//     //可选选项，自动滑动
//     // autoplay: true,
//     // 设置轮播方向 horizontal（水平）    vertical （垂直）
//     // direction: 'horizontal',
//     // 无缝衔接
//     loop: true,

//     // 切换图片
//     slidesPerView: 6,  //一组有多少个图片
//     slidesPerGroup: 1,// 每次切换多少个图片

// })

// // 一种方法：
// // 定义变量记录当前图片的索引值
// var index = mySwiper.activeIndex;
// var len = $(".swiper-slide").length;
// console.log(index);
// // 事件绑定
// $(".type_bannner .left").on('click', function () {
//     // console.log("test")
//     // console.log(mySwiper.activeIndex);
//     index--;
//     if (index < 1) {
//         index = 6;
//     }
//     console.log(index);
//     // 切换图片
//     mySwiper.slideTo(index)
// })

// $(".type_bannner .right").on('click', function () {
//     // console.log("test")
//     // console.log(mySwiper.activeIndex);
//     index++;
//     if (index > 6) {
//         index = 1;
//     }
//     mySwiper.slideTo(index)
// })

// // JS 监听页面尺寸的变化
// window.addEventListener('resize', initSwiperFunc);
// function initSwiperFunc() {
//     var w = window.innerWidth;
//     if (w < 1200) {
//         mySwiper = new Swiper('.swiper', {
//             // 无缝衔接
//             loop: true,
//             // 切换图片
//             slidesPerView: 1,  //一组有多少个图片
//             slidesPerGroup: 1,// 每次切换多少个图片
//         })

//         $(".type_bannner .left").css("height",'auto')
//         $(".type_bannner .right").css("height",'auto')
//         $(".type_bannner .photo").css("height",'auto')
//         $(".type_bannner .swiper-slide p").css("display",'none')
//     }
//     else {
//         mySwiper = new Swiper('.swiper', {
//             // 无缝衔接
//             loop: true,
//             // 切换图片
//             slidesPerView: 6,  //一组有多少个图片
//             slidesPerGroup: 1,// 每次切换多少个图片
//         })

//         $(".type_bannner .left").css("height",'150px')
//         $(".type_bannner .right").css("height",'150px')
//         $(".type_bannner .photo").css("height",'200px')
//         $(".type_bannner .swiper-slide p").css("display",'block')
//     }
// }
// initSwiperFunc();



// 旅行类型（轮播图）
$(function () {
    $(document).on('click', '.btn-lan', function () {
        var flag = $(this).attr('data-lan');
        if (flag == '1') {
            $(this).text('Cn').attr('data-lan', '2');
        } else {
            $(this).text('En').attr('data-lan', '1');
        }
    });

    $(document).on('click','.btn_article_before',function () {
        $('.blue_article_before').hide();
        $('.blue_article_after').slideDown();
    });
    $(document).on('click','.btn_article_after',function () {
        $('.blue_article_before').show();
        $('.blue_article_after').slideUp();
    });
    
    $(document).on('click','.btn_fixed_close',function () {
        $('.blue_fixed').hide();
    });
    
    $('.blue_wx').hover(function () {
        $('.blue_share_wx').addClass('active');
    },function () {
        $('.blue_share_wx').removeClass('active');
    });
    $('.blue_mail').hover(function () {
        $('.blue_share_mail').addClass('active');
    },function () {
        $('.blue_share_mail').removeClass('active');
    });

    swiperMove();
    $(window).resize(function () {
        swiperMove()
    });
});
var mySwiper = 1;
function swiperMove() {
    var offWidth = $(window).width();
    if (offWidth <= 767) {
        if(mySwiper != 1){
            mySwiper.destroy();
        }
        mySwiper = new Swiper('.swiper-container', {

            direction: 'horizontal',
            loop: true,

            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
    } else {
        if(mySwiper != 1){
            mySwiper.destroy();
        }
        mySwiper = new mySwiper('.swiper-container', {

            direction: 'horizontal',
            loop: true,

            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            slidesPerView: 6,
            spaceBetween: 20
        });
    }
}



// 侧栏广告
$(".tt_index_aside .handle-box").on("mouseenter",function(){
    // console.log("test", $(this).index())
    // 索引值
    var index = $(this).index();
    //事件调用者
    $(".tt_index_aside .item").eq(index).stop().animate({
        left: -280
    },300)
})
$(".tt_index_aside .handle-box").on("mouseleave",function(){
    var index = $(this).index();
    //事件调用者
    $(".tt_index_aside .item").eq(index).stop().animate({
        left: -0
    },300)
})