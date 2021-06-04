// carosel-section 

	var acarousel = $("#carousel").acarousel();
	$("#carousel li a").click(function() {
		if (acarousel.isAnim()) return false;
		var move = acarousel.moveByElem($(this).parent());
		if (move == 0) {
		  alert("Click Selected Element");
		} else {
		  changeActive(move);
		}
		return false;
	});
	