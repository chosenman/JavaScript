(function main() {
// for example there are two arrays and we should return intersected numbers
// arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]
//.              -     -  -           -  -  -          <-- there are our numbers
// we should output [ 3, 6, 7]
    
    var arr1 = [1, 2, 3, 5, 6, 7], 
        arr2 = [3, 6, 7, 8, 20];

    function findDuplicates(arr1, arr2) {
      var outputArray = [];

      for (var i = 0; i< arr1.length; i++){
        if( findIndex(arr2, arr1[i]) != null ) {
          outputArray.push(arr1[i]);
        }
      }
      return outputArray
    }
    
    // find index helper function
        function findIndex(arr, value){
          var start = 0,                // start of range for seach
              end = arr.length-1,       // end for range for search
              middle;                   // middle
          //
          while(start != end){
            middle = Math.floor( (start + end)/2 ) ; // 3
            if( arr[middle] == value){
                return middle;
            } 
            // going on the left
            else if( arr[middle] > value ){
              // we don't want to go out of the left corner of the array
              if( middle != 0 ) {
                  end = middle - 1;
              } else { 
                  break 
              }
            } 
            // going on the right
            else if ( arr[middle] < value ) {
              // we don't want to go out of the right corner of the array
              if( middle != arr.length-1 ) {
                start = middle + 1; // 2   
              } else { 
                  break 
              }
            } 
          }
          if( start == end && arr[start] == value ) {
              return start;
          }
          return null;
        }

console.log( findDuplicates(arr1, arr2) )
    
    
    
}());