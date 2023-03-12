
// This is my own invented method to solve swap sort
// Created March 11 2023
// Lagos



function Slectionsort(arr) {
   var min= 1000000;
    var indexof;
    for (let i = arr.length-1; i >1; i--) {
         
        for (let j = 0; j< i; j++) {
            if (min>=arr[j]) {
                min=arr[j];
                indexof=j;
            }
           
        }
       var temp=arr[i];
            arr[i]=min;
            arr[indexof]=temp;
        
    }
    return console.log(arr);
}


Slectionsort([4,7,6,1,6,8])