

public class biggestSibling {

/////////////
/////////////
/////////////
/////////////
// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {

    // find biggest
    public String biggest(String N, int size) {
        int biggest = Character.getNumericValue( N.charAt(0) );
            for (int j = 1; j< size; j++){
                if( biggest < Character.getNumericValue( N.charAt(j) ) ){
                    biggest = Character.getNumericValue( N.charAt(j) );
                }
            }
            return Integer.toString(biggest);
    }

    // remove given
    public String remove(String N, String Letter){
        Boolean removed = false;
        String result = "";
        for (int i = 0; i< N.length(); i++){
            if ( Character.toString( N.charAt(i) ).equals(Letter) && removed == false){
                removed = true;
            } else {
                result += Character.toString( N.charAt(i) );
            }
            // helper function which will remove added number from inputed
        }
        //System.out.println(result);
        return result;
    }

    public int solution(int N) {

        // making string and saving the number of numbers in input number
        String string = Integer.toString(N);
        int loopsize = string.length();
        int size = string.length();
        String result = "";
        String letter = "";

        // find biggest and put in front

        // outer loop for size of number
        for (int i = 0; i< loopsize; i++){
            letter = biggest( string, size );
            result += letter;

            // helper function which will remove added number from inputed
            string = remove(string, letter);
            size = string.length();
        }

        return Integer.parseInt(result);
    }
}
/////////////
/////////////
/////////////
/////////////

  public static void main(String[] args){

    int N = 3456;

    System.out.println( solution(N) );

  }




}
