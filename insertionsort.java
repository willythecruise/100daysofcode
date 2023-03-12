public class insertionsort {
     public static void insertsort(int array[]) {
        for (int i = 1; i < array.length; i++) {
            int key= array[i];
            int hole= i-1;
            while (hole>=0 && key< array[hole]) {
                array[hole+1]=array[hole];
                hole--;
                    
                }
                array[hole+1]=key;
            }
        }
    }
