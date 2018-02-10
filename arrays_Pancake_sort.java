import java.io.*;
import java.util.*; 

// "static void main" must be defined in a public class.
public class Main {
    
    // pancacke sort
          static int[] pancakeSort(int[] arr) {
            // we are gradually reducing range
            for(int length = arr.length; length >=0; length--) {
              int biggestValue = arr[0];
              int biggestIndex = 0;
              // looking for biggest in current range
              for( int i = 0; i < length; i++){ // this range will be reduced (length)
                if(arr[i] > biggestValue) {
                  biggestValue = arr[i];
                  biggestIndex = i;
                }
              }
              // we put BIGGEST in front
              arr = flip(arr,biggestIndex); 
              // we need it to don't tuch already flipped previous BIGGEST ONES
              arr = flip(arr, length-1 ); 
            }
            return arr;
          }
  
  // flip function flips order in given range (first k elems) of array
        static int[] flip(int [] arr , int k ){
          int endIndex = k;
          for(int i = 0 ; i <=  k ; i ++, endIndex--){

            if( endIndex != i && endIndex > i ) {
              int swap = arr[i];
              arr[i] = arr[endIndex];
              arr[endIndex] = swap;
            } else {
              break;
            }

          }
          return arr;
        }
    
    
    // execution
    public static void main(String[] args) {
        int[] arr = {1, 5, 4, 3, 2};
        System.out.println( Arrays.toString( pancakeSort(arr) )  );

    }
}