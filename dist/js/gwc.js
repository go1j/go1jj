"use strict";$(".qjs").click(function(){alert("您配吗")}),getSum();var str=localStorage.getItem("userCart"),arr=JSON.parse(str),ul=$(".spp");ul.html('<li>\n    <input type="checkbox" name="" id="" class="danxuan">\n            </li>\n    <li>\n        <img src='.concat(arr[0].img,' alt="">\n            <span class="s1"> ').concat(arr[0].mingcheng,' </span>\n            </li>\n        <li><span class="s2">').concat(arr[0].danjia,'</span>元</li>\n        <li>\n            <button class="jian">-</button>\n            <input type="text" value="').concat(arr[0].num,'" id="" class="shuliang">\n                <button class="jia">+</button>\n            </li>\n            <li class="ll3"><span class="s3">').concat(arr[0].price+".00",'</span>元</li>\n            <li><span class="s4">删除</span></li>'));var ul1=$(".spp1"),str11=localStorage.getItem("userCart11"),arr11=JSON.parse(str11);function getSum(){var t=0,s=0;$(".shuliang").each(function(n,a){t+=parseInt($(a).val())}),$(".zj").text(t),$(".ll3").each(function(n,a){s+=parseFloat($(a).text())}),$(".zjg").text(s.toFixed(2)+"元")}ul1.html('<li>\n    <input type="checkbox" name="" id="" class="danxuan">\n            </li>\n    <li>\n        <img src='.concat(arr11[0].img,' alt="">\n            <span class="s1"> ').concat(arr11[0].mingcheng,' </span>\n            </li>\n        <li><span class="s2">').concat(arr11[0].danjia,'</span>元</li>\n        <li>\n            <button class="jian">-</button>\n            <input type="text" value="').concat(arr11[0].num,'" id="" class="shuliang">\n                <button class="jia">+</button>\n            </li>\n            <li class="ll3"><span class="s3">').concat(arr11[0].price+".00",'</span>元</li>\n            <li><span class="s4">删除</span></li>')),$(".quanxuan").change(function(){$(".danxuan,.quanxuan").prop("checked",$(this).prop("checked"))}),$(".danxuan").change(function(){$(".danxuan:checked").length===$(".danxuan").length&&$(".quanxuan").prop("checked",!0)}),$(".danxuan").change(function(){$(".danxuan:checked").length!==$(".danxuan").length&&$(".quanxuan").prop("checked",!1)}),$(".s4").click(function(){$(this).parent().parent().remove(),getSum()}),$(".jia").click(function(){var n=$(this).prev().val();n++,$(this).prev().val(n);var a=$(this).parent().prev().text();a=a.substr(0,4);var num=(a*n).toFixed(2);$(this).parent().next().text(num+"元"),getSum()}),$(".jian").click(function(){var n=$(this).next().val();if(1==n)return!1;n--,$(this).next().val(n);var a=$(this).parent().prev().text();a=a.substr(0,4),num=(a*n).toFixed(2),$(this).parent().next().text(num+"元"),getSum()}),$(".shuliang").change(function(){var n=$(this).val(),a=$(this).parent().prev().text();a=a.substr(0,4),varnum=n*a,console.log(num),$(this).parent().next().text(num+"元"),getSum()}),getSum();