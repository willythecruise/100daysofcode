function binarysearch(array, high, low,key) {
    high= array.length-1;
    low=0;
    middle= (low+high)/2
    while (low<high) {
        if (key==array[middle]) {
            return midle;
        }else if (key<array[middle]) {
            high=middle-1;
        } else if (key>array[middle]) {
            low= middle+1;
        } 
        
    }
    return false;
}