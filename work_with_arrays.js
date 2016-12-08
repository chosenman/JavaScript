/* Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times. */


function findOdd(A) {
  //happy coding!
  let OperA = A;
  let oddCountBigrVale = 0;
  
  for( let i=0; i<OperA.length; i++) {     
      let oddCounter = 0; 
	  
      for (let t=0; t<OperA.length; t++) {
        if (OperA[t] == OperA[i]) { oddCounter++;} 
      }
      if (oddCounter%2 !== 0) {
        return OperA[i];
      }
  }
}

/* Given an array, find the odd int that appears biggest and an odd number of times. */

function findOdd(A) {
  //happy coding!
  let OperA = A;
  let oddCountBigrVale = 0;
  
  for( let i=0; i<OperA.length; i++) {
    if (OperA[i]%2 !== 0) {
		
	  let oddCounter = 0;
      for (let t=0; t<OperA.length; t++) {
        if (OperA[t] == OperA[i]) { oddCounter++;} 
      }
      if (oddCounter%2 !== 0) {
        if (oddCounter > oddCountBigrVale) { 
			oddCountBigrVale = OperA[i];
		}
      }
    }
  }
  return oddCountBigrVale;
}
