/* 
Make unique array
*/
    var startArray = [ 9, 3, 3, 3, 5, 6, 6, 7, 8 ];
    // result we are trying to achieve
    // var resultA = [ 9, 3, 5, 6, 7, 8 ];

    function makeUniqArray(arrArgument) {
      var resultArray = [];
      var duplicateBase = {};
      for (var i = 0; i < arrArgument.length; i++) {

        if(duplicateBase[arrArgument[i]]===undefined) {
          duplicateBase[arrArgument[i]] = 1;
            
            console.log(duplicateBase[arrArgument[i]]);         
          resultArray.push(arrArgument[i]);
        } else {
          duplicateBase[arrArgument[i]] = duplicateBase[arrArgument[i]] + 1;
          console.log(duplicateBase[arrArgument[i]]);
        }
      }
      return resultArray;
    }
    // console.log(makeUniqArray(startArray));