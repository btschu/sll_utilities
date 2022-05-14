class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    // accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node
    addFront(val){
        var new_node = new Node(val);
        if(!this.head){
            this.head = new_node ;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    // Return a boolean (true/false); true, if the list possesses a node that contains the provided value.
    contains(value) {
        if (!this.head) {
            return false;
        }
        var runner = this.head;
        while (runner) {
            if (runner.data == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    // return the number of nodes in the list
    length() {
        var runner = this.head;
        var length = 0;
        while (runner){
            length++;
            runner = runner.next;
        }
        console.log(`Length is ${length}.`);
        return this;
    }
    // returns a string containing all list values. Build what you wish console.log(myList) did!
    display(){
        var runner = this.head;
        var displayStr = "";
        while (runner){
            displayStr += `${runner.data} -> `;
            runner = runner.next;
        }
        displayStr += "null";
        console.log(displayStr);
        return this;
    }
    // standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.
    moveMinToFront() {
        var runner = this.head;
        var minVal = this.head.data;
        var minNode;
        var beforeMinNode;
        // find node with minVal and node just before
        while(runner.next){
            if (runner.next.data < minVal){
                minVal = runner.next.data;
                beforeMinNode = runner;
                minNode = runner.next;
            }
            runner = runner.next;
        }
        // remove minNode from list
        beforeMinNode.next = minNode.next;
        // add minNode to beginning of list
        minNode.next = this.head;
        // reset head to reflect new start of list
        this.head = minNode;
        return this;
    }
    // standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.
    moveMaxToBack(){
        var runner = this.head;
        var maxVal = this.head.data;
        var maxNode;
        var beforeMaxNode;
        while (runner.next){
            if (runner.next.data > maxVal){
                maxVal = runner.next.data;
                maxNode = runner.next;
                beforeMaxNode = runner;
            }
            runner = runner.next;
        }
        beforeMaxNode.next = maxNode.next;
        runner.next = maxNode;
        maxNode.next = null;
        return this;
    }
}


var firstList = new LinkedList();
firstList.addFront(11).addFront(8).addFront(19).addFront(3).addFront(6);


console.log("ORIGINAL:");
firstList.display() //6 -> 3 -> 19 -> 8 -> 11 -> null
firstList.length() //length is 5
console.log(firstList.contains(3)); //true
console.log(firstList.contains(1)); //false
console.log("Minimum to front:");
firstList.moveMinToFront() //3 -> 6 -> 19 -> 8 -> 11 -> null
firstList.display()
console.log("Maximum to back:");
firstList.moveMaxToBack() //3 -> 6 -> 8 -> 11 -> 19 -> null
firstList.display()


