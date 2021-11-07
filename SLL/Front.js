//Write a method that accepts a value and create a new node,
// assign it to the list head, and return a pointer to the new head node.

class SLLNode{
    constructor(val){
        this.val=val;
        this.next=null;

    }
}

function insertNodeAtFront(head,data){
    let newNode= new SLLNode(date);
    if(!head==null){
        head=newNode;
        return head;
    } else {
        newNode.next=head;
        head=newNode;
    }
    return head;
}

dispaly(){
    var chain ="";
    if (head==null){
        return null;
    }
    pointer=head;
    while(true){
        chain+=pointer.data;
        if(pointer.next==null){
            console.log(chain);
            return chain;

        }
        chain+=",";
        runner=pointer.next;
        pointer=runner;

    }
}

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

