"use strict";$(".s11").click(function(){$(".dialog-box").removeClass("ycc"),$(".top_gouwuce").text("购物车"+$(".count-input").val()).addClass("ysgb")}),$(".icon-dialog-close").click(function(){$(".dialog-box").addClass("ycc")}),$(".cancel").click(function(){$(".dialog-box").addClass("ycc")}),$(function(){var i,n;$(".ys1").addClass("ss1"),$(".s11").click(function(){var i=($(".count-input").val(),$(".count-input").val(),$(".a1").text(),$(".qian").text());i=JSON.stringify(car11);localStorage.setItem("userCart22",i)}),$.ajax({type:"get",url:"../json/json.json?"+(i=(new Date).getTime(),n=10*Math.random(),"".concat(i,"%").concat(n)),dataType:"json",success:function(i){var n,s;n=i,$(".img_box").html('<img class="dzp_img" src=\''.concat(n.b_img2[0],'\' alt="">')),s=i,$(".tupian>ul").on("mouseenter","li",function(){var i=$(this).index();$(".img_box").html('<img class="dzp_img" src=\''.concat(s.b_img2[i],'\' alt="">'))}),function(i){var n=0;for(n=0;n<i.b_img.length;n++)console.log(i.b_img2[n]),$(".ull").html('<li class="xzp x zuiqian" index="1"><img class="xzp_img"\n                                src="'.concat(i.b_img2[0],'" alt="">\n                        </li>\n                        <li class="xzp x" index="2"><img class="xzp_img"\n                                src="').concat(i.b_img2[1],'" alt="">\n                        </li>\n                        <li class="xzp x" index="3"><img class="xzp_img"\n                                src="').concat(i.b_img2[2],'" alt="">\n                        </li>\n                        <li class="xzp x" index="4"><img class="xzp_img"\n                                src="').concat(i.b_img2[3],'" alt="">\n                        </li>\n                        <li class="xzp x" index="5"><img class="xzp_img"\n                                src="').concat(i.b_img2[4],'" alt="">\n                        </li>\n                        <li class="zuihou xzp yc x " index="6"><img class="xzp_img"\n                                src="').concat(i.b_img2[5],'" alt="">\n                        </li> '))}(i)}}),$(".tupian>ul").on("mouseenter","li",function(){$(this).addClass("s").removeClass("x").siblings().removeClass("s").addClass("x")})}),$(".icon-detail-add").click(function(){localStorage.setItem("num",$(".count-input").val())}),$(".xzp").click(function(){$(this).removeClass("x").addClass("s").siblings().removeClass("s").addClass("x").parent().prev().prev().children().addClass("dzp1").eq($(this).index()).removeClass("dzp1")}),$(".zuodianji").click(function(){$(".tupian").animate({left:"-90px"}),$(".zuiqian").addClass("tm"),$(".zuihou").removeClass("yc"),MF,Nd.B}),$(".youdianji").click(function(){$(".tupian").animate({left:"0px"}),$(".zuiqian").removeClass("tm"),$(".zuihou").addClass("yc")}),$(".jieshao_jz>a").click(function(i){i.preventDefault()}),$(".title6 a").click(function(i){i.preventDefault()}),$(".yi").click(function(){$(this).addClass("jieshao gg").siblings().removeClass("jieshao gg").parent().next().next().children().addClass("pp").eq($(this).index()).removeClass("pp")}),$(".count-btn").click(function(){var i=$(this).siblings(".count-input").val();i++,$(this).siblings(".count-input").val(i)}),$(".icon-detail-minus").click(function(){var i=$(this).siblings(".count-input").val();if(1==i)return!1;i--,$(this).siblings(".count-input").val(i)});