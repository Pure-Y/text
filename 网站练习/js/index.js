$(function(){
	//轮播图
	var iNow = 0,//表示正在显示的图片的索引
		iZIndex = 2,
		$ali = $('#tab li');

	$ali.on('mouseover',function(){
		var index = $(this).index();//得到当前的Li的索引

		if(!$(this).is('.selected')){
			$(this).addClass('selected').siblings().removeClass('selected');
			$('#imgs img:eq('+iNow+')').stop();
			var $img = $('#imgs img:eq('+index+')');
			$img.css({
					opacity:0,
					'z-index':iZIndex++
				})
				.animate({
					opacity: 1
				},1000);
			iNow = index;
		}	
	});
	$('#next').on('click',function(){
		var idx = ++iNow%$ali.length;
		$ali.eq(idx).trigger('mouseover');
	});
	$('#prev').on('click',function(){
		var idx = --iNow%$ali.length;
		$ali.eq(idx).trigger('mouseover');
	});
});