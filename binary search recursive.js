 function binarysearch(array,key, high, low) {
   high= array.length-1;
   low=0;
  
   while (low<=high) {
     middle= (high+low)/2;
    if (key == array[middle]) {
    return array[middle];
   }else if (key < array[middle]) {
    binarysearch(array,key,middle-1,low);
   }else if(key > array[middle]) {
    binarysearch(array,key,middle+1,high);
}

   }
   return false;

    }
    
 