public class circularlinkedlist {
    /**
     * Node
     */
    public class Node {
    int data;
    Node next;
        
    }

    boolean  hascycle(Node head){
        Node fast= head.next;
        Node slow= head;
        while (head!=null && head.next!=null) {
            if(fast == slow){
                return true;
            }
            fast=fast.next.next;
            slow=slow.next; 
            
        }
        return false;
    } 
}
