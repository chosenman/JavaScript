function pancakeSort(arr){

	for (var length = arr.length; length >= 0; length--) {
		var biggestValue = arr[0];
		var biggestIndex = 0;
		// looking for biggest in the current range
		for (var i = 0; i < length; i++) {
			if(arr[i] > biggestValue){
				biggestValue = arr[i];
				biggestIndex = i;
			}
		}
		// we put BIGGEST in front
		arr = flip(arr, biggestIndex);
		// 
		arr = flip(arr, length-1);
	}
	return arr;
}

	// flip function
	function flip(arr, k){
		var endIndex = k;

		for (var i = 0; i <= k; i++ ) {
			if( endIndex != i && endIndex >i ){
				var swap = arr[i];
				arr[i] = arr[endIndex];
				arr[endIndex] = swap;
			} else {
				break;
			}
			endIndex--
		}
	}

	console.log( pancakeSort([1, 5, 4, 3, 2]) );

