var cString = "I did, did I, Madam I'm Adam, racecar"
function reverse(str){
	var reversed = '';
	for (var i = 0; i < str.length; i++) {
		reversed = str[i] + reversed;
	}
	return reversed
}

function superCleaner(str, min, max){
	var cleanString = "";
	var min = min || 97;
	var max = max || 122;
	for (var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) >= min && str.charCodeAt(i) <= max){
			cleanString += str[i];
		}
	}
	return cleanString;
}

function cleaner(str, min, max){
	var cleanString = "";
	var min = min || 97;
	var max = max || 122;
	for (var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) >= min && str.charCodeAt(i) <= max || str.charCodeAt(i) == 32){
			cleanString += str[i];
		}
	}
	return cleanString;
}

function iSearch(str) {
	var cleanString = cleaner(str.toLowerCase());
	// console.log(cleanString);
	var polSet = cleanString.split(" ");
	var longest = '';
	var longestReal = '';
	for (var i = 0; i < polSet.length; i++) {
		if( polSet[i] === cleaner(reverse(polSet[i])) ) {
			if(polSet[i].length > longest.length) {
				longest = polSet[i]
			}
		}
	}
	var checkingStr = '';
	var trueResult = str.split(" ");
	var candidateRam = '';
	for (var i = 0; i < polSet.length; i++) {
		for (var y = i+1; y < polSet.length; y++) {
			if (y == polSet.length){
				break;
			}
			if(polSet[i][0] == polSet[y][polSet[y].length-1]) {

				for (var x = i; x <= y; x++) {
					checkingStr += polSet[x];
					console.log(checkingStr);
					candidateRam += trueResult[x] + " ";
					// console.log(candidateRam);
				}
				if( checkingStr === reverse(checkingStr) )  {
					if(checkingStr.length > longest.length) {
						longest = checkingStr;
						longestReal = candidateRam;
					}
				}
				checkingStr = '';
				candidateRam = '';
			}
		}
	}
	return longestReal
}


function longestPolyndrome(str) {
	var polSet = str.toLowerCase().split(" ");
	var longest = ""
	for (var i = 0; i < polSet.length; i++) {
		if( polSet[i] === cleaner(reverse(polSet[i])) ) {
			if(polSet[i].length > longest.length) {
				longest = polSet[i]
			}
		}
	}
	return longest
}




// console.log(longestPolyndrome('Racecar madamimadam maam') )
console.log(iSearch(cString) )
