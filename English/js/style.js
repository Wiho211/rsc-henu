$(function () {
    $(".nav-list>li").mouseenter(function () {
        $(this).children(".nav-down").stop(true, true).show();
    }).mouseleave(function () {
        $(this).children(".nav-down").stop(true, true).hide();
    });
});
jQuery(".slider-img").slide({
    titCell: ".slider2 ul li",
    mainCell: ".slider1 ul",
    autoPlay: true,
    effect: 'leftLoop',
    trigger: "click"
});
$(".right1 li").hover(function () {
    var i = $(this).index();
    $(".left1 .tab").eq(i).show().siblings().hide();
});


$('.nav-click').click(function () {
    if ($(this).next(".left-down2").is(":hidden")) {
        $(this).next(".left-down2").slideDown("slow");
        console.log(this)
    } else {
        $(this).next(".left-down2").slideUp("slow");
    }
})

$('.ernav').click(function () {
    if ($(this).next(".erji").is(":hidden")) {
        $(this).next(".erji").slideDown("slow");
        console.log(this)
    } else {
        $(this).next(".erji").slideUp("slow");
    }

})
$(".lbhz>li.hover3 .erji").slideDown();



$(".lbhz>li.hover3 .left-down2").slideDown();
// $(".lbhz>li .left-down2>li.erji").children('ul').slideDown().siblings('ul').slideUp();
// $(".lbhz>li .left-down3 .sanji").children(".left-down4").slideDown();

$(".right1 li:first").css("padding-top", "0");
$(".new1-bot li:nth-child(2n)").css("margin-right", "0")
$(".nav-down li:hover:last").css("border-radius", "0 0 20px 0");