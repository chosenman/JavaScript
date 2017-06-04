// instead of document ready
(function(){

	console.log("Pacman was lounched...");
	// down - .keyCode === 40
	// up - .keyCode === 38
	// left - .keyCode == 37
	// right - .keyCode == 39

	var pacman = document.getElementById('pacman');
	// pacman.setAttribute('style',"top:");


	document.addEventListener("keydown",function(e){
		
		// down - .keyCode === 40
		if(e.keyCode == 40) {
			// var y = pacman.getAttribute(top);
			// console.log(y);
			// pacman.setAttribute('style',"top:")
			console.log('down');
		}
		// up - .keyCode === 38
		if(e.keyCode == 38) {
			console.log('up');
		}
		// left - .keyCode == 37
		if(e.keyCode == 37) {
			console.log('left');
		}
		// right - .keyCode == 39
		if(e.keyCode == 39) {
			console.log('right');
		}

		//console.log(e.keyCode);
	});

})();