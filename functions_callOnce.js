(function main() {

	function functionOuter(){
	     var counter=1;
	     return function(){
	         if(counter>0){
	             console.log("hello")
	         } else {
	             console.log("sorry this function was already called");
	         }
	         counter--;
	     }
	 }
 
 	var callMeOnce = functionOuter();
	 
	callMeOnce();
	callMeOnce();

}());