function Bubblesort(n,arr) {
      var inside;
      var out;
        for(out=n-1;out>0;out--){
            for(inside=0; inside<out; inside++){
                if(arr[inside]>arr[inside+1]){
                    var temp= arr[inside]
                    arr[inside]=arr[inside+1];
                }
            }
        }
    return console.log(arr);
}
   

    Bubblesort(6,[4,7,6,1,6,8]);