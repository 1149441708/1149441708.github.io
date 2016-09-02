/*       navFixed       */
/*  author : Jasin Yip  */
/*  version: 1.0.2      */

$.fn.navFixed = function(){
	var $_this = $(this),
		$_this_prev_marginBottom = parseInt($_this.prev().css("margin-bottom").substring(0, $_this.prev().css("margin-bottom").length-2)),
		$_this_next_marginTop = parseInt($_this.next().css("margin-top").substring(0, $_this.next().css("margin-top").length-2)),
		_topPosition = $(document).scrollTop(),
		_navPosition = $_this.prev().outerHeight(true);

		console.log("marginBottom " + $_this_prev_marginBottom);
		console.log("marginTop " + $_this_next_marginTop);

	_if();

	$(document).scroll( function() {
		_topPosition = $(document).scrollTop();
		_if();
	});

	$(window).resize(function(){
		_navPosition = $_this.prev().outerHeight(true);
		_if();
	});

	function _if(){

		console.log("top " + _topPosition);
		console.log("nav " + _navPosition);

		if (_topPosition >= _navPosition){
			$_this.css("position", "fixed");
			$_this.next().css("margin-top", $_this_prev_marginBottom + $_this.outerHeight() + $_this_next_marginTop + "px");

			console.log("fix "  + $_this_prev_marginBottom + $_this.outerHeight() + $_this_next_marginTop);
		}else{
			$_this.css("position", "relative");
			$_this.next().css("margin-top", $_this_next_marginTop + "px");

			console.log("relative " + $_this_next_marginTop);
		}
	}
}
