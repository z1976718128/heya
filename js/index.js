/*
 * @Author: your name
 * @Date: 2019-11-04 11:44:47
 * @LastEditTime: 2019-11-07 10:38:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Elegance\js\index.js
 */
$(function () {
	$(".navbar-toggle").on("click", function () {
		$(".carousel").toggle()

	})

	// 回到顶部
	$(window).scroll(function(){
	
		if ($(window).scrollTop()>300){
			$(".right").fadeIn();
		}
		else
		{
			$(".right").fadeOut();
		}
	});
	$(".topt").click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});
	// 回到顶部
	
	$(".showbt").hover(function(){
		$(".dropdowna").fadeIn();
		$(".navbar-fixed-top").animate({
			height:"200px"
		})
		$(".dropdowna").animate({
			top:"20px"
		})
	},function(){

		$(".dropdowna").fadeOut();
		$(".navbar-fixed-top").animate({
			height:"80px"
		})
		$(".dropdowna").animate({
			top:"12px"
		})
		
	})
	
	$(".info_ul >li").on("click",function(){
		$(this).addClass("activei").siblings().removeClass("activei")
	})
	$(".s_ul >li").on("click",function(){
		$(this).addClass("activei").siblings().removeClass("activei")
	})
	$(".witsa").hover(function(){
		$(this).css("color","#fff")
	})
	
	// $("#showIf").on("click",function(){
	// 	$(".yy").show();
	// 	$("iframe").show()
	// 	$("nav").hide()
	// 	 $('.yy').css('height',document.body.clientHeight+'px');
	// })
	
	// $(".yy").on("click",function(){
	// 	$("iframe").hide()
	// 	$("nav").show()
	// 	$(this).hide()
	// })
	
	$(".but").on("click",function(){
		let id = $(this).attr("data-id");
		if(id==9){
			$(".bo").html("联系我们");
			$(".model_right_ts").html("扫描二维码联系我们~")
			$(".addnr").html("CONTACT US")
		}
		$(".myModal").show()
		$(".yy").show();
		$('.yy').css('height',document.body.clientHeight+'px');
	})
	$(".yy").on("click",function(){
		$(".bo").html("在线预约");
		$(".model_right_ts").html("扫描二维码在线预约~")
		$(".addnr").html("ONLINE BOOKING")
		$(".myModal").hide()
		$(this).hide()
	})
	$(".close_imgs").on("click",function(){
		$(".bo").html("在线预约");
		$(".model_right_ts").html("扫描二维码在线预约~")
		$(".addnr").html("ONLINE BOOKING")
		$(".myModal").hide()
		$(".yy").hide()
	})
	
	var menu = $('.rm-nav').rMenu({
		minWidth: '960px',
	});
	$('pre').addClass('prettyprint');
})