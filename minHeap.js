//Heaps

// Add to heap
// Given a value, add it to the heap -- make sure the number ends up where it should go in the heap!
// Ex: given insert(3) into a heap that already contains [null,2,4,7,5,6], you should return a heap like this: [null, 2,4,3,5,6,7]

// Remove from heap
// Remove the top value from a heap and reorder the heap so that it is in relative order
// Ex: After running remove on a heap that contains [null,2,4,7,5,6], you should return a heap liike this: [null,3,4,7,5,6]

class MinHeap {
    constructor(){
        // Initialize an "empty" heap
        this.heap = [null]
    }
    size(){
        // Remember there is a null value at index 0, so we don't want to count it in the full length
        return this.heap.length - 1;
    }
    top(){
        // If the heap isn't just null, return the top value, otherwise return null
        return this.heap.length > 1 ? this.heap[1] : null;
    }
    printMe(){
        console.log(this.heap)
    }
    insert(value){
        this.heap.push(value);
        // console.log("tem heap after push: "+this.heap)
        let currentIdx = this.heap.length -1;
        // console.log("current idx is "+currentIdx);
        let parent = Math.floor(currentIdx/2);
        // console.log("parent index: "+parent)
        while(this.heap[parent]> this.heap[currentIdx] && this.heap[parent]!=null){
            // console.log("in while loop")
            let temp = this.heap[parent];
            this.heap[parent] = this.heap[currentIdx];
            this.heap[currentIdx] = temp;
            currentIdx = parent;
            parent = Math.floor(currentIdx/2);
        }
        // console.log(this.heap);
        return this.heap;
    }
    remove(){
        // console.log("original heap length: "+this.heap.length)
        // let root = this.heap[1];
        // console.log("last item : "+this.heap[this.heap.length-1])
        this.heap[1] = this.heap[this.heap.length-1]
        this.heap.pop();
        // console.log("new heap length: "+this.heap.length)
        let current = 1
        // console.log("current now: "+current)
        while( current < this.size()/2){
            if(this.heap[current*2]< this.heap[(current*2)+1]){
                let temp = this.heap[current]
                this.heap[current] = this.heap[current*2]
                this.heap[current*2] = temp;
                current = current*2;
                // console.log("current now: "+current)
            } else{
                let temp = this.heap[current]
                this.heap[current] = this.heap[(current*2)+1]
                this.heap[(current*2)+1] = temp;
                current = (current*2)+1;
                // console.log("current now: "+current)
            }
        }
        // console.log(this.heap)
        return this.heap;
    }
}

const minHeap = new MinHeap();
minHeap.printMe();
minHeap.insert(5);
minHeap.insert(4);
minHeap.insert(7);
minHeap.insert(2);
minHeap.insert(6);
minHeap.insert(3);
console.log("=========Heap after all inserts=========")
minHeap.printMe();
minHeap.remove();
console.log("=========Heap after removing the root=========")
minHeap.printMe();
console.log("=========top of the heap=========")
console.log(minHeap.top());
console.log("=========size of the heap=========")
console.log(minHeap.size());