public class binasysearchtree {
    /**
     * Node
     */
    public class Node {
    Node left;
    Node right;
    int data;

    public Node(int data){
        this.data= data;
    }
       public void insert(int value) {
        if(value<= data){
            if(left==null){
                left= new Node(value);
            }
        }
    }  
    }
   
    
}
