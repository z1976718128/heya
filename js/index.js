/*
 * @Author: your name
 * @Date: 2019-11-04 11:44:47
 * @LastEditTime: 2019-11-06 18:36:32
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
		console.log($(window).scrollTop())
		if ($(window).scrollTop()>500){
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
})