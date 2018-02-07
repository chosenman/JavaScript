/* 
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times. 

*/
function findOdd(inputArray) {
  
  for( let i=0; i<inputArray.length; i++) {     
      let oddCounter = 0; 
	  
      for (let t=0; t<inputArray.length; t++) {
        if (inputArray[t] == inputArray[i]) { oddCounter++;} 
      }
      if (oddCounter%2 !== 0) {
        return inputArray[i];
      }
  }
}
// console.log(findOdd([1,1,1,22,22,4,5,5,5,5,5]))

/* 
Given an array, find the odd int that appears biggest and an odd number of times. 
*/

function findOddBiggestTimes(inputArray) {
  let oddCountBigestTimesVale = 0;
  
  for( let i=0; i<inputArray.length; i++) {
    if (inputArray[i]%2 !== 0) {
		
      let oddCounter = 0;
      for (let t=0; t<inputArray.length; t++) {
        if (inputArray[t] == inputArray[i]) { oddCounter++;} 
      }
      if (oddCounter%2 !== 0) {
        if (oddCounter > oddCountBigestTimesVale) { 
      			oddCountBigestTimesVale = inputArray[i];
      		}
      }
    }
  }
  return oddCountBigestTimesVale;
}
// console.log(findOddBiggestTimes([1,1,1,22,22,4,5,5,5,5,5]))