import java.io.*;
import java.util.*; 

class Solution {

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
      arr = flip(arr,biggestIndex); // we put BIGGEST in front
      arr = flip(arr, length-1 ); // we need it to don't tuch already flipped previous BIGGEST ONES
      
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

  public static void main(String[] args) {

  }

}