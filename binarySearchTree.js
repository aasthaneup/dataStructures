class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
        
    }
}
class BST{
    constructor(){
        this.root = null;
        // this.height = 0;
    }

    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
    add(value) {
        // your code here
        var newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
            // this.root.height = 0
        } else{
            var subroot = this.root;
            while(subroot!=null){
                if(subroot.value>value){
                    if(subroot.left!=null){
                        subroot= subroot.left;
                    }
                    else{
                        subroot.left = newNode
                        subroot.height++;
                        if(subroot.right==null){
                            // this.root.height++
                        }
                        return;
                    }
                } else if(subroot.value<value){
                    if(subroot.right!=null){
                        subroot = subroot.right;
                    } else{
                        subroot.right = newNode;
                        if(subroot.left==null){
                            // this.root.height++
                        }
                        return;
                    }
                }
                else{
                    console.log("You can't insert duplicate values in a BST!");
                    return;
                }
            }
        }
    }

    // Given a BST, return the value of the min node in the tree
    findMin(){
        // your code here
        var runner = this.root;
        var min = runner.value;
        while(runner.left!=null){
            runner = runner.left;
        }
        min = runner.value;
        return min;
    }
    // Given a BST, return the value of the max node in the tree
    findMax(){
        // your code here
        var runner = this.root;
        var max = runner.value;
        while(runner.right!=null){
            runner = runner.right;
        }
        max = runner.value;
        return max;
    }

    // Given a value, check to see if the value is in the BST
    contains(value) {
        // your code here
        var node=this.root;
        if(this.root== null){
            console.log("The tree is empty!");
            return false;
        }
        else{
            while(node!=null){
                // move left
                if(node.value>value){
                    node = node.left;
                }
                // move right
                else if(node.value<value){
                    node = node.right;

                }
                // found it
                else if(node.value==value){
                    return true;
                }
            }
            return false;
        }
    }

    // Given a BST, determine the size (how many nodes there are)
    size() {
        // your code here
        var count = this.length(this.root);
        return count;
    }

    length(node){
        if(node==null){
            return 0;
        }
        var cnt = 1;
        cnt += this.length(node.left);
        cnt += this.length(node.right);
        return cnt;
    }
    

    printValues(){
        console.log("Printing in in-order:")
        this.printBSTNodesInOrder(this.root);
        // console.log("Printing in post-order:")
        // this.printBSTNodesPostOrder(this.root);
    }
        
    // Print in post order (Left->right->root):
    printBSTNodesPostOrder(node){
        if(node==null){
            return;
        }
        this.printBSTNodesPostOrder(node.left);
        this.printBSTNodesPostOrder(node.right);
        console.log(node.value);
    }

    // print values in-order:
    printBSTNodesInOrder(node){
        if(node==null){
            return;
        }
        this.printBSTNodesInOrder(node.left);
        console.log(node.value);
        this.printBSTNodesInOrder(node.right);
    }

     // Given a BST, return the height of the largest branch
    maxHeight(n = this.root) {
        return  n == null ? 0 : 1 + Math.max(this.maxHeight(n.left),this.maxHeight(n.right)); 
    }

    isBalanced(n = this.root) {
        return n == null ? true : this.maxHeight(n.left) == this.maxHeight(n.right);
    }


    // Given a BST and a node's value, remove the specified node from the BST without disrupting the structure
    remove(value) {
        //your code here
        if(this.contains(value)){
            // delete the node
            this.root = this.removeNode(this.root, value);
            console.log("successfully deleted!");
        }
        else{
            console.log("No such value found in the tree!")
        }
    }

    removeNode(node, value){
        if(node==null){
            return node;
        }
        if(node.value>value){
            node.left = this.removeNode(node.left, value)
        }
        else if(node.value <value){
            node.right = this.removeNode(node.right, value)
        }
        // found it!
        else{
            // if either child is null
            if(node.right==null){
                return node.left;
            }
            else if(node.left == null){
                return node.right;
            }
            // if both child are not null
            // find replacement for the to-be-deleted tree: i.e. smallest after its next largest and duplicate the value into the node
            node.value = this.findMin(node.right).value;
            // now delete the original node (whose value replaced the found node)
            node.right(this.removeNode(node.right, node.value));
        }
        return node;
    }

}

var bst = new BST();
bst.add(8);
bst.add(15);
bst.add(3);
bst.add(-12);
bst.add(22);
bst.add(10);
bst.add(5);
bst.printValues();
console.log("========Max==========")
console.log(bst.findMax());
console.log("========Min==========")
console.log(bst.findMin());
console.log("=========contains 10?=========")
console.log(bst.contains(10)); // true
console.log("=========contains 17?=========")
console.log(bst.contains(17)); // false
console.log("=========Size=========")
console.log(bst.size());
console.log("========max height==========");
console.log(bst.maxHeight());
console.log("========is Balanced?==========");
console.log(bst.isBalanced());
console.log("========remove==========");
bst.remove(10);
bst.remove(90);
console.log("==================");
bst.printValues();
