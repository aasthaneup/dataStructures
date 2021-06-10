class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SLList{
    constructor(){
        this.head = null;
    }
    printAllValues(){
        var runner = this.head
        if(runner!=null){
        while(runner.next != null){
            console.log(runner.value)
            runner = runner.next
        }
        console.log(runner.value)
        }
        return;
    }
    addToFront(value){
        const newnode = new Node(value);
        if(this.head == null){
            this.head = newnode;
        }
        else{
            var temp = this.head;
            this.head= newnode;
            this.head.next = temp;
        }
    }

    addToEnd(value){
        const newnode = new Node(value);
        if(this.head ==null){
            this.head = newnode;
        }
        else{
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = newnode ;
        }
    }
    
    contains(value){
        if(this.head == null){
            return false
        }
        var runner = this.head
        while(runner.next != null){
            if(runner.value == value){
                return true
            }
            runner = runner.next
        }
        if(runner.value == value){
            return true
        } else {
            return false
        }
    }

    removeFromFront(){
        if(this.head!=null){
            this.head = this.head.next;
        }
        else{
            console.log("The list is empty. Thus cant remove anything.")
        }
    }

    removeFromBack(){
        if(this.head!=null){
            var runner = this.head;
            while(runner.next!=null && runner.next.next != null){
                runner = runner.next
            }
            runner.next = null;
        }
        else{
            console.log("The list is empty. Thus cant remove anything.")
        }
    }

    removeValue(value) {
        var runner = this.head;
        if(this.head.value ==value){
            this.head = this.head.next;
            return;
        }
        while(runner.next !=null && runner.next.value!=value){
            runner = runner.next
        }
        if(runner.next !=null){
            var temp = runner.next;
            runner.next = runner.next.next;
            temp.next = null;
        }
        return
    }

    // find the node with the MAX value and move it to the END of the list
    // the whole node not just the value of that node
    moveMaxToBack(){
        if(this.head !=null){
            var runner = this.head;
            var max = this.head;
            while(runner.next !=null){
                if(runner.next.value>max.value){
                    max = runner.next;
                }
                runner = runner.next;
            }
            console.log("The maximim value is "+max.value);
            this.removeValue(max.value);
            if(this.head!=null){
                var runner2 = this.head;
                while(runner2.next != null){
                    runner2 = runner2.next;
                }
                runner2.next = max;
                // console.log("reached here!")
                max.next = null;
                return;
            }
        }
    }
    // find the node with the MIN value and move it to the FRONT of the list
    // the whole node not just the value of that node
    moveMinToFront(){
        
    }
     // Given a value and location in your SLL, add that value as a new node in your SLL either after or before the given loc
    prependValue(value, loc) {
        if(this.head !=null){
            const newNode = new Node(value);
            var runner = this.head;
            if(loc == 1){
                var temp = this.head;
                this.head= newNode;
                newNode.next = temp;
            }
            else{
                for (var i = 1; i< loc-1; i++){
                    if(runner.next !=null){
                        runner = runner.next;
                    }else{
                        console.log("The location "+loc+" does not exist in the list.")
                        return;
                    }
                }
                var temp = runner.next;
                runner.next = newNode;
                newNode.next = temp;
            }
        }
    }

    appendValue(value, loc) {
        if(this.head !=null){
            const newNode = new Node(value);
            var runner = this.head;
            if(loc ==1){
                var temp = this.head.next;
                this.head.next = newNode;
                newNode.next = temp;
            }else{
                for(var i = 1; i<loc; i++){
                    if(runner.next !=null){
                    runner = runner.next;
                    }
                    else{
                        console.log("The location "+loc+" does not exist in the list.")
                        return;
                    }
                }
                if(runner.next!=null){
                    var temp = runner.next;
                    runner.next = newNode;
                    newNode.next = temp;
                }else{
                    runner.next = newNode;
                }
            }
        }
    }
    // TAKES IN  LIST AND REMOVES ALL NEGATIVE VALUES IN THAT LIST
    removeNegatives(){
        // if(this.head !=null){
        //     var runn = this.head;
        //     while(runn!=null && runn.next !=null){
        //         if(runn.next.value > 0){
        //             runn = runn.next
        //         }
        //         else if(runn.next.value < 0){
        //             if(runn.next.next !=null){
        //                 runn.next = runn.next.next;
        //                 runn = runn.next;
        //             }
        //             else{
        //                 runn.next = null;
        //             }
        //         }
        //     }
        //     if(this.head.value <0){
        //         this.head = this.head.next;
        //     }
        // }
    }
    //  takes in a list and reverse the order of the nodes
    reverseList(){
        var current = this.head;
        var prev = null;
        var nextNode = null;
        while(current !=null){
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
    }
}

const list = new SLList();
list.addToFront(1)
list.addToFront(-21)
list.addToFront(32)
list.addToFront(14)
console.log('-------------------------------------------------')
list.printAllValues()
console.log('-------------------------------------------------')
list.removeFromFront()
list.printAllValues()
console.log('-------------------------------------------------')
list.removeFromBack()
list.printAllValues()

list.addToFront(17)
list.addToFront(-29)
console.log('-------------------------------------------------')
list.printAllValues()
console.log('-------------------------------------------------')
list.removeValue(17)
list.printAllValues();

console.log('-------------------------------------------------')
list.addToFront(99);
console.log('-------------------------------------------------')
list.printAllValues();
list.moveMaxToBack();
console.log('-------------------------------------------------')
list.printAllValues();
console.log('-------------------------------------------------')
list.addToEnd(12);
list.printAllValues();
console.log('-------------------------------------------------')
list.moveMinToFront();
list.printAllValues();

list.prependValue(-22, 3);
console.log('---------------------prepended value----------------------------')
list.printAllValues();
console.log('-------------------------------------------------')
list.appendValue(88, 4);
console.log('---------------------appended value----------------------------')
list.printAllValues();
console.log('-------------------------------------------------')
// list.removeNegatives();
// console.log('----------------------Only Positive values--------------------')
// list.printAllValues();
list.reverseList();
console.log('----------------------Reversed values--------------------')
list.printAllValues();
