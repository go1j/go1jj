/* 加入购物车就弹出框 */
$('.s11').click(function () {
    $('.dialog-box').removeClass('ycc')
    $('.top_gouwuce').text('购物车' + ($('.count-input').val())).addClass('ysgb')
})
/* 点击叉关掉弹出框 */
$('.icon-dialog-close').click(function () {
    $('.dialog-box').addClass('ycc')
})
/* 点击继续框框就消失 */
$('.cancel').click(function () {
    $('.dialog-box').addClass('ycc')
})

//tab选项卡
$('.yi').click(function () {
    $(this).addClass('jieshao gg').siblings()
        .removeClass('jieshao gg')
        .parent().next().next().children().addClass('pp')
        .eq($(this).index()).removeClass('pp')
})
/* 阻止默认事件 */
$(".jieshao_jz>a").click(function (event) {
    event.preventDefault();
});
$(".title6 a").click(function (event) {
    event.preventDefault();
});

$('.ys2').click(function () {
    $(this).addClass('ss1').removeClass('ss2').prev().removeClass('ss1').addClass('ss2')
})
$('.ys1').click(function () {
    $(this).addClass('ss1').removeClass('ss2').next().removeClass('ss1').addClass('ss2')
})

$(function () {

    $('.ys1').addClass('ss1')

    $('.s11').click(function () {
        var car33 = [
            {
                img: "https://mall01.sogoucdn.com/image/2020/08/21/20200821185313_5207.jpg"
                , num: $('.count-input').val(), price: $('.count-input').val() * 499,
                mingcheng: $('.a1').text(), danjia: $('.qian').text()
            }
        ]
        var car33 = JSON.stringify(car33);
        localStorage.setItem('userCart33', car33)

    })

    init();
    // 时间戳
    function jtime() {
        var data_w = new Date();
        var time_w = data_w.getTime();
        var num_w = Math.random() * 10;
        var data_time = `${time_w}%${num_w}`
        return data_time;
    }

    function init() {
        $.ajax({
            type: "get",
            url: "../json/json.json?" + jtime(),
            dataType: "json",
            success: function (res) {
                firstinit(res);
                enterinit(res);
                eveneinit(res);
            }
        });
    }

    //初始页面加载
    // 第一张大图片
    function firstinit(res) {
        // console.log(res)
        // console.log($('.img_box'))
        $('.img_box').html(`<img class="dzp_img" src='${res.b_img3[0]}' alt="">`)


    }
    //  小图片
    function eveneinit(res) {
        var i = 0;
        var str = ""
        for (i = 0; i < res.b_img1.length; i++) {
            console.log(res.b_img1[i]);
            $('.ull').html(`<li class="xzp x zuiqian" index="1"><img class="xzp_img"
                    src="${res.b_img3[0]}" alt="">
            </li>
            <li class="xzp x" index="2"><img class="xzp_img"
                    src="${res.b_img3[1]}" alt="">
            </li>
            <li class="xzp x" index="3"><img class="xzp_img"
                    src="${res.b_img3[2]}" alt="">
            </li>
            <li class="xzp x" index="4"><img class="xzp_img"
                    src="${res.b_img3[3]}" alt="">
            </li>
            <li class="xzp x" index="5"><img class="xzp_img"
                    src="${res.b_img3[4]}" alt="">
            </li>
            <li class="zuihou xzp yc x " index="6"><img class="xzp_img"
                    src="${res.b_img3[5]}" alt="">
            </li> `)
        }
        // $('.ull').html(str)
    }

    // 滑过小图片上面图片会改变
    function enterinit(res) {
        $(".tupian>ul").on('mouseenter', 'li', function () {
            let imgi = $(this).index();
            $('.img_box').html(`<img class="dzp_img" src='${res.b_img3[imgi]}' alt="">`)
        })
    }
    // 冒泡到小图片上加边框
    $('.tupian>ul').on('mouseenter', 'li', function () {
        $(this).addClass('s').removeClass('x').siblings().removeClass('s').addClass('x')
    })


})

$('.icon-detail-add').click(function () {
    localStorage.setItem("num", $('.count-input').val());
})


$('.xzp').click(function () {
    $(this).removeClass('x').addClass('s').siblings().removeClass('s').addClass('x')
        .parent().prev().prev().children().addClass('dzp1').eq($(this).index())
        .removeClass('dzp1')
})
$('.zuodianji').click(function () {
    $('.tupian').animate({
        left: '-90px',
    })
    $('.zuiqian').addClass('tm')
    $('.zuihou').removeClass('yc')

    MF < Nd.B
})
$('.youdianji').click(function () {
    $('.tupian').animate({
        left: '0px',
    })
    $('.zuiqian').removeClass('tm')
    $('.zuihou').addClass('yc')
})