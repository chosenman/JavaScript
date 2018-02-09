(function main() {
/*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/
    
    function orderTranversal(inputArray){
        var outputArray = [];
        var numb = 1;
        var index = 0;

        while(inputArray[index]!== undefined){
            outputArray.push( helper(numb, inputArray, outputArray, index) );
            index +=numb;
            numb *=2;
        }
        console.dir(outputArray);
    }

        function helper(numb, inputArray, outputArray, index){
            var smallArray = [];
            while(numb){
                    if(inputArray[index] != null) {
                        smallArray.push(inputArray[index]);    
                    }
                numb--;
                index++;
            }
            return smallArray;
        }

        var a = [3,9,20,null,null,15,7];
        orderTranversal(a);
    
}());