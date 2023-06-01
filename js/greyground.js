$(function () {

		$("#wrap").stop().hide();
		// 2.5초 로딩
	
		$(window).load(function () {
			$("#load").stop().delay(2500).hide(0, function () {
				$("#wrap").stop().show(0);
			});
		});

	// setIntercal function
	setInterval(slides, 4000);

	function slides() {
		var left = $("#slide1 ul").css("left");
		if ($(window).width() > 599 && $(window).width() < 1025) {
			$("#slide1 ul").stop().animate({
				'left': '-=900px'
			}, 1000, function () {
				if (left <= '-900px') {
					$("#slide1 ul").css('left', '900px');
				}
			});
		} else if ($(window).width() > 1025) {
			$("#slide1 ul").stop().animate({
				'left': '-=1600px'
			}, 1000, function () {
				if (left <= '-1600px') {
					$("#slide1 ul").css('left', '1600px');
				}
			});
		}
		else {
			$("#slide1 ul").stop().animate({
				'left': '-=480px'
			}, 1000, function () {
				if (left <= '-480px') {
					$("#slide1 ul").css('left', '480px');
				}
			});
		}
	}

	// 리사이즈
	$(window).resize(function () {
		$("#slide1 ul").css('left', '0px');
		var w = $(window).width();
		var h = $(window).height();
		$('html, body').css({ width: w, height: h });
		clearInterval(slides);
		// mediaQuery

		// w 600~1024
		if (matchMedia("screen and (min-width:600px) and (max-width:1024px)").matches) {
			for (var i = 0; i < 4; i++) {
				$("#slide4 div").eq(i).children('img').attr('src', 'img/box' + (i + 1) + '-2' + '.png');
				$("#slide1 .slidebox .box" + i + "back").attr('src', 'img/topside' + (i) + '.png');
			}
			// 슬라이드 setinterval
			$('#slide1 .slidebox ul li').each(function (idx) {
				$(this).css('left', 900 * (idx - 1));
			});
			return;
		}
		// w 1025~
		else if (matchMedia("screen and (min-width:1025px)").matches) {
			for (var i = 0; i < 4; i++) {
				$("#slide4 div").eq(i).children('img').attr('src', 'img/box' + (i + 1) + '-1' + '.png');
				$("#slide1 .slidebox .box" + i + "back").attr('src', 'img/topside' + (i) + '.png');
			}

			// 슬라이드 setinterval
			$('#slide1 .slidebox ul li').each(function (idx) {
				$(this).css('left', 1600 * (idx - 1));
			});
			return;
		}
		// w ~599
		else {
			for (var i = 0; i < 4; i++) {
				$("#slide4 div").eq(i).children('img').attr('src', 'img/box' + (i + 1) + '-3' + '.png');
				$("#slide1 .slidebox .box" + i + "back").attr('src', 'img/topside' + (i) + '-' + (i) + '.png');
			}
			// 슬라이드 setinterval
			$('#slide1 .slidebox ul li').each(function (idx) {
				$(this).css('left', 480 * (idx - 1));
			});
			return;
		}

	}).resize();
	$(window).trigger('resize');

	// 슬라이드 버튼 클릭
	$('#button .first').click(function () {
		$("#slide1 ul").stop().animate({ 'left': '0px' });
	});

	$('#button .second').click(function () {
		if ($(window).width() > 599 && $(window).width() < 1025) {
			$("#slide1 ul").stop().animate({ 'left': '-900px' });
		} else if ($(window).width() > 1025) {
			$("#slide1 ul").stop().animate({ 'left': '-1600px' });
		}
		else {
			$("#slide1 ul").stop().animate({ 'left': '-480px' });
		}
	});

	$('#button .third').click(function () {
		if ($(window).width() > 599 && $(window).width() < 1025) {
			$("#slide1 ul").stop().animate({ 'left': '900px' });
		} else if ($(window).width() > 1025) {
			$("#slide1 ul").stop().animate({ 'left': '1600px' });
		}
		else {
			$("#slide1 ul").stop().animate({ 'left': '480px' });
		}
	});


	// 스크롤 페이드인

	$(window).scroll(function () {
		var from = $(window).scrollTop(); // 윈도우 스크롤탑
		// slide4 scroll
		$('.all').each(function () {
			var Slide4Top = $(this).offset().top;
			if (from > Slide4Top / 1.4) {
				$('#slide4 span').fadeIn(2000);
				$('.all').eq(0).stop().animate({ 'opacity': 1, 'top': 0 }, 800, function () {
					$('.all').eq(1).stop().animate({ 'opacity': 1, 'top': 0 }, 1200, function () {
						$('.all').eq(2).stop().animate({ 'opacity': 1, 'top': 0 }, 1200);
					});
				});
			}
		});


		// perfume scroll
		$("#slide3 .perfume").each(function () {
			var Slide3Top = $(this).parent('div').offset().top;
			// perfume opacity
			if (from > Slide3Top / 1.3) {
				$(this).parent().stop().animate({ 'opacity': 1 }, 500);
				$(this).stop().animate({ 'opacity': 1 }, 0, function () {
					// perfume left right
					if ($(window).width() > 599 && $(window).width() < 1025) {
						$('#slide3 .saint').stop().animate({ 'left': '-20%' }, 700);
						$('#slide3 .pantheon').stop().animate({ 'left': '50%' }, 900);
						$('#slide3 .medina').stop().animate({ 'left': '-5%' }, 1000);
					} else if ($(window).width() > 1025) {
						$('#slide3 .saint').stop().animate({ 'left': '-20%' }, 700);
						$('#slide3 .pantheon').stop().animate({ 'left': '50%' }, 900);
						$('#slide3 .medina').stop().animate({ 'left': '-5%' }, 1000);
					}
					else {
						$('#slide3 .saint').stop().animate({ 'left': '3%' }, 700);
						$('#slide3 .pantheon').stop().animate({ 'left': '40%' }, 900);
						$('#slide3 .medina').stop().animate({ 'left': '10%' }, 1000);
					}
				});
			}
		});
	});
});