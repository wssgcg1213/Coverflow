var scroller = 0;
function flowInit () {
	$(".previous").on("click", leftFlow);
	$(".next").on("click", rightFlow);
	$(".left2").live("click", rightFlow);;
	$(".left1").live("click", rightFlow);;
	$(".center");
	$(".right1").live("click", leftFlow);
	$(".right2").live("click", leftFlow);
	$(document).on("mousewheel", mouseScroll);
	function mouseScroll(ev){
		$(document).off("mousewheel", mouseScroll);
		ev.preventDefault();
		var scrollerNow = $(window).scrollTop();
		if(scroller > scrollerNow){
			rightFlow();
		}else if(scrollerNow == 0){
			rightFlow();
		}else{
			leftFlow();
		}
		scroller = scrollerNow;
		setTimeout(function(){
			$(document).on("mousewheel", mouseScroll);
		}, 500);
	}

}

function rightFlow(ev) {
	if(ev)ev.preventDefault();
	$(".left2").removeClass('left2').addClass('tempR');
	$(".right2").removeClass('right2').addClass('left2');
	$(".right1").removeClass('right1').addClass('right2');
	$(".center").removeClass('center').addClass('right1');
	$(".left1").removeClass('left1').addClass('center');
	$(".tempR").removeClass('tempR').addClass('left1');
}

function leftFlow(ev) {
	if(ev)ev.preventDefault();
	$(".right2").removeClass('right2').addClass('tempL');
	$(".left2").removeClass('left2').addClass('right2');
	$(".left1").removeClass('left1').addClass('left2');
	$(".center").removeClass('center').addClass('left1');
	$(".right1").removeClass('right1').addClass('center');
	$(".tempL").removeClass('tempL').addClass('right1');

}

flowInit();
