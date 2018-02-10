
// arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]
//.              -     -  -           -  -  -
// i should output [ 3, 6, 7]
// 
var unsorted = [ 4, 323, 66, 78,1, 21];

var arr1 = [1, 2, 3, 5, 6, 7], 
    arr2 = [3, 6, 7, 8, 20];

function findDuplicates(arr1, arr2) {
  var N = arr1.length;
  var M = arr2.length;
  var outputArray = [];
  // your code goes here
  for (var i = 0; i< N; i++){
    if( arr2.indexOf(arr1[i]) != -1 ) {
      outputArray.push(arr1[i]);
    }
  }
  return outputArray
  
}
  //                                 0     2       4 -- middle = 
 //                       20   in    [3, 6, 7, 8, 20]
//                                          .  3   4
//                        2 +   (4-2)/2 = 3
//                        8 < 20 -- start = 3
function findIndex(arr, value){
  var start = 0;
  var end = arr.length-1;
  var middle;
  //.     2   < 4
  while(start < end){
    middle = Math.round( (start + end)/2 ) ; // 0.5 --> 0
    if(arr[middle] > value){
      end = middle;
    } else if (arr[middle] < value) {
      start = middle; // 2
    } else { // equal
      return middle;
    }
  }
  
  return null;
}

console.log( findDuplicates(arr1, arr2) )