// 手机二维码
$('.aa').mouseover(function () {
    $('.erweima img').css('display', 'block')
})
$('.erweima img').mouseover(function () {
    $('.erweima img').css('display', 'block')
})
$('.aa').mouseout(function () {
    $('.erweima img').css('display', 'none')
})
$('.erweima img').mouseout(function () {
    $('.erweima img').css('display', 'none')
})
// 回顶部
$(window).scroll(() => {
    if ($(window).scrollTop() >= 1000) {
        //让回到顶部按钮显示
        $('.gotop').fadeIn()
    } else {
        //让回到顶部按钮隐藏
        $('.gotop').fadeOut()
    }
    //2 这个按钮一点击,让浏览器滚动到顶部
    $('.goTop').click(() => {
        //让页面回到顶部-->滚回去
        //让页面滚动回去,需要用到animate()函数
        //滚动的不是窗口,是页面
        //所以我们是在这里让页面的scrollTop变成0
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })
})
// 智能翻译 二级菜单
$('.nav_li1').mouseover(function () {
    $('.ejcd1').css('display', 'block')
})
$('.ejcd1').mouseover(function () {
    $('.ejcd1').css('display', 'block')
})
$('.ejcd1').mouseout(function () {
    $('.ejcd1').css('display', 'none')
})
$('.nav_li1').mouseout(function () {
    $('.ejcd1').css('display', 'none')
})
// 糖猫手表 二级菜单
$('.nav_li2').mouseover(function () {
    $('.ejcd2').css('display', 'block')
})
$('.ejcd2').mouseover(function () {
    $('.ejcd2').css('display', 'block')
})
$('.ejcd2').mouseout(function () {
    $('.ejcd2').css('display', 'none')
})
$('.nav_li2').mouseout(function () {
    $('.ejcd2').css('display', 'none')
})

//配件 二级菜单
$('.nav_li3').mouseover(function () {
    $('.ejcd3').css('display', 'block')
})
$('.ejcd3').mouseover(function () {
    $('.ejcd3').css('display', 'block')
})
$('.ejcd3').mouseout(function () {
    $('.ejcd3').css('display', 'none')
})
$('.nav_li3').mouseout(function () {
    $('.ejcd3').css('display', 'none')
})