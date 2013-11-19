$(window).load(function() {

	// Preloader Removal //
	$('#preloader').slideUp(500, function() {$(this).remove();});

	// Parallax Scrolling and Scroll Binding //
	function parallaxScroll(){
		var scrolled = $(window).scrollLeft();
		$('#layer1').css('left',(0+(scrolled*.7))+'px');
		$('#layer2').css('left',(0+(scrolled*.36))+'px');
		$('#layer4').css('left',(0-(scrolled*.425))+'px');
	}
	$(window).bind('scroll',function(e){parallaxScroll();});

	// Browser Based Scrolling Parameters //
	if ($.browser.mozilla) {
		var t_len = 45;
		var t_pix = 18;
	} else if ($.browser.webkit) {
		var t_len = 15;
		var t_pix = 10;
	} else if ($.browser.opera) {
		var t_len = 15;
		var t_pix = 10;
	} else if ($.browser.msie) {
		var t_len = 15;
		var t_pix = 10;
		$('.arr').remove();
		$('html').css('background','#555555');
	} else {
		var t_len = 25;
		var t_pix = 12;
	}

	// Manual Scrolling //
	$(function(){
		$("#moveL").hover(
			function(){
				$this = $(this);$this.data("isHovering", true);
				$this.data("loopId", setInterval(function(){ if ($this.data("isHovering")) {window.scrollBy(-t_pix,0);}},t_len))
			},
			function(){
				$this = $(this);$this.data("isHovering", false);
				if ($this.data("loopId")) {clearInterval($this.data("loopId"));	$this.data("loopId", false);}
			}
		)
		$("#moveR").hover(
			function(){
				$this = $(this);$this.data("isHovering", true);
				$this.data("loopId", setInterval(function(){ if ($this.data("isHovering")) {window.scrollBy(t_pix,0);}},t_len))
			},
			function(){
				$this = $(this);$this.data("isHovering", false);
				if ($this.data("loopId")) {clearInterval($this.data("loopId"));	$this.data("loopId", false);}
			}
		)
	});

	// Automated Scrolling //
	function scrollTo(newpos) {$('html,body').stop().animate({scrollLeft: newpos}, Math.abs(newpos - window.scrollX) * 2.5)}
	$('#arrR').click(function () {scrollTo(9000-document.body.clientWidth);});
	$('#arrL').click(function () {scrollTo(0);});
	$('#stop').click(function () {$('html,body').stop().stop();});

});