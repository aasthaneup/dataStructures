class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // given a value, add a node containing that value to the front of your DLL
    addToFront(value) {
        var newNode = new Node(value);
        if(this.head == null){
            this.tail = newNode;
            this.tail.prev = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    // given a value, add a node containing that value to the end of your DLL
    addToBack(value) {
        var newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
    }

    // remove the first node in a DLL
    removeFromFront() {
        if(this.head == null){
            console.log("Cant remove from front of an empty list");
        }
        else{
            var temp = this.head;
            this.head.next.prev = null;
            this.head = this.head.next;
        }
        return temp;
    }

    // remove the last node in a DLL
    removeFromBack() {
        if(this.head == null){
            console.log("Cant remove from back of an empty list");
        }
        else{
            var temp = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
        return temp;
    }

    // prints the items of a DLL from front to back
    printValuesForward() {
        var runner = this.head;
        if(this.head ==null){
            console.log("The list is empty!")
        }
        else{
            while(runner){
                console.log(runner.val);
                runner = runner.next;
            }
        }
    }
    
    // prints the items of a DLL from back to front
    printValuesBackward() {
        var runner = this.tail;
        if(this.tail ==null){
            console.log("The list is empty!")
        }
        else{
            while(runner){
                console.log(runner.val);
                runner = runner.prev;
            }
        }
    }

    // return the length of a given DLL
    lengthOfList() {
        var runner = this.head;
        var length = 0;
        if(this.head ==null){
            // console.log("The length of the list is 0");
            return 0;
        }
        else{
            while(runner){
                length +=1;
                runner = runner.next;
            }
        }
        // console.log("The length of the given doubly linked list is: "+length);
        return length;
    }


    // Given and value and index, insert a Node of that value before the given index
    insertBefore(value, index) {
        var runner = this.head;
        if(index!=0){
            for(var i = 1; i<index; i++){
                if(runner !=null){
                    runner = runner.next;
                }
                else{
                    console.log("The index not found. The list is shorter that you expected!");
                    return;
                }
            }
            if(runner.next !=null){
                var newNode = new Node(value);
                newNode.next = runner.next;
                runner.next.prev = newNode;
                newNode.prev = runner;
                runner.next = newNode;
                console.log("Successfully inserted!");
            }
            else{
                console.log("The index not found. The list is shorter that you expected!");
                    return;
            }
            
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Given and value and index, insert a Node of that value after the given index
    insertAfter(value, index) {
        var runner = this.head;
        for(var i = 0; i<index; i++){
            if(runner !=null){
                runner = runner.next;
            }
            else{
                console.log("The index not found. The list is shorter that you expected!");
                return;
            }
        }
        var newNode = new Node(value);
        if(runner== this.tail){
            newNode.next = null;
            this.tail = newNode;
        }
        else{
            newNode.next = runner.next;
            runner.next.prev = newNode;
        }
        newNode.prev = runner;
        runner.next = newNode;
        console.log("Successfully inserted!");
    }

    // given a DLL reverse the list
    // NOT JUST swapping head and tail but also reverse the next and prev pointers
    reverseList() {
        var current = this.head;
        var previous = null;
        var nextNode = null;
        var futuretail = this.head;
        while(current){
            nextNode = current.next;
            current.next = previous;
            if(previous !=null){
                previous.prev = current;
            }
            previous = current;
            current = nextNode;
        }
        this.head = previous;
        this.head.prev = null;
        this.tail = futuretail;
        console.log("reversed list's head: "+this.head.val);
        console.log("reversed list's tail: "+this.tail.val);
        console.log("reversed list's head.next: "+this.head.next.val);
        console.log("reversed list's tail.prev: "+this.tail.prev.val);
        console.log("printing values forward after reversing:")
        this.printValuesForward();
        console.log("-------printing backwards after reversing-------")
        this.printValuesBackward();
    }
}

list = new DLL();
list.addToFront(3);
list.addToFront(6);
list.addToFront(9);
list.addToFront(12);
list.addToBack(15);
list.addToBack(18);
list.printValuesForward();
console.log("========length=============");
console.log(list.lengthOfList());
console.log("============print backward=========");
list.printValuesBackward();
console.log("=========print forward============");
list.printValuesForward();
console.log("=========print forward after removing from back============");
list.removeFromBack();
list.printValuesForward();
console.log("==========print forward after removing from front===========");
list.removeFromFront();
list.printValuesForward();
console.log("==========length===========");
console.log(list.lengthOfList());
console.log("=========insert before============");
list.insertBefore(8, 10);
console.log("=========insert before============");
list.insertBefore(-9, 3);
list.printValuesForward();
console.log("==========insert after===========");
list.insertAfter(45, 15);
console.log("=========insert after============");
list.insertAfter(45, 1);
list.printValuesForward();
console.log("=========insert after============");
list.insertAfter(16, 5);
list.printValuesForward();
console.log("=========insert before============");
list.insertBefore(-23, 7);
console.log("=========insert before============");
list.insertBefore(-23, 6);
list.printValuesForward();
console.log("============List 2====================");
list2 = new DLL();
list2.addToFront(9);
list2.addToFront(12);
list2.addToBack(15);
list2.addToBack(18);
list2.printValuesForward();
console.log("=====reverse list=========");
list2.reverseList();