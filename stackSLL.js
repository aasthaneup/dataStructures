class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

// SLStack operate similar to a Queue & SLL, with the concept of "First In, Last Out" in mind
// Think of a Pringles can: the last chip added to the can is the first one out
// You can think of 'top' as the 'head' for a SLStack 
class SLStack{
    constructor(){
        this.top = null;
    }
    // adds a value to our stack
    push(value){
        const newNode = new Node (value)
            var temp = this.top;
            newNode.next = temp;
            this.top = newNode;
    }

    // remove and return the top value
    pop(){
        if(!this.top){
            console.log("The list is empty. Thus, can't pop anything.")
        }
        else{
            var temp = this.top;
            this.top = this.top.next;
            temp.next = null;
        }
    }

    peak(){
        if (this.top !=null){
            console.log(this.top.val);
            return this.top.val;
        }
        else{
            console.log("The stack is empty.");
        }
    }

    // return whether the stack is empty
    isEmpty(){
        if (this.top ==null){
            console.log("The stack is empty");
            return true;
        }
        else{
            console.log("The stack is not empty");
            return false;
        }
    }

    // return whether a given value is within the stack
    contains(value){
        var runner = this.top
        if(this.top == null){
            return false;
        }
        while(runner.next != null){
            if(runner.val == value){
                return true
            }
            runner = runner.next
        }
        if(runner.val == value){
            return true
        } else {
            return false
        }
    }

    // return the number of stacked values
    size(){
        var runner = this.top;
        var stacksize = 0;
        if(runner!=null){
            stacksize = 1
            while(runner.next != null){
                stacksize +=1;
                runner = runner.next
            }
        }
        console.log(stacksize);
        return stacksize;
    }

    displayStack(){
        var runner = this.top;
        if(runner!=null){
            while(runner.next != null){
                console.log(runner.val)
                runner = runner.next
            }
        console.log(runner.val)
        }
        return;
    }
}


const stack = new SLStack();
stack.displayStack();
console.log("=======Is the stack empty?==========");
stack.isEmpty();
console.log("==========Peak=======");
stack.peak();
console.log("==========pop=======");
stack.pop();
console.log("======After pushes===========");
stack.push(21);
stack.push(9);
stack.push(16);
stack.displayStack();
console.log("=========After pop========");
stack.pop();
stack.displayStack();
console.log("==========Peak=======");
stack.peak();
console.log("=================");
stack.displayStack();
console.log("=========Is the stack empty?========");
stack.isEmpty();
console.log("=========Does the stack contain...?========");
console.log(stack.contains(90));
console.log(stack.contains(9));
console.log("=========After pushes========");
stack.push(20);
stack.push(29);
stack.push(14);
stack.displayStack();
console.log("========The size of the stack is: =========");
stack.size();
console.log("========Peak=========");
stack.peak();