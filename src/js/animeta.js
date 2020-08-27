var timer;
function getYunDong(obj, target, getImg) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        obj.X = obj.offsetLeft;
        sudu = (target - obj.X) / 10;
        sudu = sudu > 0 ? Math.ceil(sudu) : Math.floor(sudu);
        obj.style.left = obj.X + sudu + 'px';
        if (obj.x == target) {
            clearInterval(obj.timer)
        }
        /* if (getImg) {
            getImg()
        } */
        //调用函数
        getImg && getImg();
        //短路运算符
    }, 20)
}