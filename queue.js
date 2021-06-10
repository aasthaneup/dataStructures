class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SLQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    printList() {
        var runner = this.head
        if(runner!=null){
        while(runner != this.tail){
            console.log(runner.value)
            runner = runner.next
        }
        console.log(runner.value)
        }
        return;
    }
    enqueue(val) {
        const newNode = new Node(val)
        if (this.head ==null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue() {
        if (this.head == null){
            console.log("The queue is empty. Thus, can't dequeue anything");
            return null;
        }
        else{
            this.head = this.head.next;
            return this.head;
        }
        
    }
    size() {
        var runner = this.head
        var queuesize = 0;
        if(runner!=null){
            queuesize = 1
            while(runner != this.tail){
                queuesize +=1
                runner = runner.next
            }
        }
        console.log(queuesize);
        return queuesize;
    }
    contains(val){
        if(this.head == null){
            return false
        }
        var runner = this.head;
        while(runner != this.tail){
            if(runner.value == val){
                return true;
            }
            runner = runner.next
        }
        if(runner.value == val){
            return true
        } else {
            return false
        }
    }
}

const queue = new SLQueue();
queue.enqueue(22);
queue.enqueue(19);
queue.enqueue(9);
queue.enqueue(19);
queue.enqueue(22);
console.log("=======================")
queue.printList();
console.log("=======================")
queue.dequeue();
queue.printList();
console.log("=======================")
queue.enqueue(2);
queue.enqueue(10);
queue.printList();
console.log("=======================")
console.log("size of the queue:");
queue.size();
console.log("=======================")
console.log("The queue contains the specified value:");
console.log(queue.contains(9));
console.log("The queue contains the specified value:");
console.log(queue.contains(91));