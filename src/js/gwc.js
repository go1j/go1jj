$('.qjs').click(function () {
    alert('您配吗')

})
getSum()
/* sp */
var str = localStorage.getItem('userCart');
var arr = JSON.parse(str);
// console.log(arr);
// console.log(arr[0].img);
// console.log(arr[0].num);
// console.log(arr[0].danjia);
// console.log(arr[0].mingcheng);
// console.log(arr[0].price);

/* sp */

var ul = $('.spp');
ul.html(`<li>
    <input type="checkbox" name="" id="" class="danxuan">
            </li>
    <li>
        <img src=${arr[0].img} alt="">
            <span class="s1"> ${arr[0].mingcheng} </span>
            </li>
        <li><span class="s2">${arr[0].danjia}</span>元</li>
        <li>
            <button class="jian">-</button>
            <input type="text" value="${arr[0].num}" id="" class="shuliang">
                <button class="jia">+</button>
            </li>
            <li class="ll3"><span class="s3">${arr[0].price + '.00'}</span>元</li>
            <li><span class="s4">删除</span></li>`
)
/* ---- */
/* sp1 */
var ul1 = $('.spp1')
var str11 = localStorage.getItem('userCart11');
var arr11 = JSON.parse(str11);
ul1.html(`<li>
    <input type="checkbox" name="" id="" class="danxuan">
            </li>
    <li>
        <img src=${arr11[0].img} alt="">
            <span class="s1"> ${arr11[0].mingcheng} </span>
            </li>
        <li><span class="s2">${arr11[0].danjia}</span>元</li>
        <li>
            <button class="jian">-</button>
            <input type="text" value="${arr11[0].num}" id="" class="shuliang">
                <button class="jia">+</button>
            </li>
            <li class="ll3"><span class="s3">${arr11[0].price + '.00'}</span>元</li>
            <li><span class="s4">删除</span></li>`
)
/* ---- */
/* sp2 */



/* ----- */
/* 表单功能 */
$('.quanxuan').change(function () {
    $('.danxuan,.quanxuan').prop('checked', $(this).prop('checked'));

})

$('.danxuan').change(function () {
    if ($('.danxuan:checked').length === $('.danxuan').length) {
        $('.quanxuan').prop('checked', true)
    }
})

$('.danxuan').change(function () {
    if ($('.danxuan:checked').length !== $('.danxuan').length) {
        $('.quanxuan').prop('checked', false)
    }
})


/*1 删除 */
$('.s4').click(function () {
    $(this).parent().parent().remove()

    getSum()
})
/*2 加 */
$('.jia').click(function () {

    var n = $(this).prev().val()
    n++
    $(this).prev().val(n)

    var p = $(this).parent().prev().text()
    p = p.substr(0, 4);
    var num = (p * n).toFixed(2);
    $(this).parent().next().text(num + '元')
    getSum()

})
/*3 减 */
$('.jian').click(function () {

    var n = $(this).next().val()
    if (n == 1) {
        return false
    }
    n--
    $(this).next().val(n)
    // console.log(n);
    var p = $(this).parent().prev().text()
    p = p.substr(0, 4);
    // console.log(p);
    var num = (p * n).toFixed(2);
    $(this).parent().next().text(num + '元')
    getSum()
})

/*4 表单改变小计 */
$('.shuliang').change(function () {
    var s = $(this).val();
    var n = $(this).parent().prev().text()
    n = n.substr(0, 4)
    var num = s * n
    console.log(num);
    $(this).parent().next().text(num + '元')
    getSum()
})



/*5 改变总数 */
getSum()
function getSum() {
    var count = 0;
    var money = 0;
    $('.shuliang').each(function (i, ele) {
        count += parseInt($(ele).val())

    })
    $('.zj').text(count)

    $('.ll3').each(function (i, ele) {

        money += parseFloat($(ele).text())
        // console.log(money);
    })
    $('.zjg').text(money.toFixed(2) + '元')
}
