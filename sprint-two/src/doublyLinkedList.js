var DoublyLinkedList = function() {
  //Object.create(LinkedList.prototype)
  var doublyLinkedList = LinkedList();


  doublyLinkedList.addToHead = function(value) {
    // Create doubly node
    var newHead = DoublyNode(value);
    // Check if head exists
    if (doublyLinkedList.head) {
      // Set current head's .previous property to new doubly node
      doublyLinkedList.head.previous = newHead;
      // Point new doubly nodes .next to current head
      newHead.next = doublyLinkedList.head;
    }
    // If the tail is null, which means the list was empty
    if (!doublyLinkedList.tail) doublyLinkedList.tail = newHead;
    // Point list head to new doubly node
    doublyLinkedList.head = newHead;
  };

  doublyLinkedList.removeTail = function() {
    // If the list is already empty, return null (can't remove anything)
    if (!doublyLinkedList.head) return null;
    // Store doublyLinkedList.tail.value in a variable
    var removedNode = doublyLinkedList.tail;
    // Set list tail to new tail
    doublyLinkedList.tail = removedNode.previous;
    // If new tail is not null (list is not empty)
    if (doublyLinkedList.tail) {
      // Set new tails next to null
      doublyLinkedList.tail.next = null;
    }
    // If list.tail is null (list is empty), also set list.head to null
    if(!doublyLinkedList.tail) doublyLinkedList.head = null;
    // return previous tails value
    return removedNode.value;
  };

  // Overwriting linkedList methods that do not modify .previous
   doublyLinkedList.addToTail = function(value){
    // Instantiate a new Node with the given value
    var newTail = DoublyNode(value);
    // If the tail exists
    if(doublyLinkedList.tail) {
      // Set the current tail's pointer to the newly created Node
      doublyLinkedList.tail.next = newTail;
      // Set new tails .previous to old tail
      newTail.previous = doublyLinkedList.tail;
    }
    // If list.head is null (list is empty), set list.head to new tail
    if(!doublyLinkedList.head) doublyLinkedList.head = newTail;
    // Set the LinkedList tail to the new Node
    doublyLinkedList.tail = newTail;
  };

  doublyLinkedList.removeHead = function(){
    // If list is empty, return null
    if(!doublyLinkedList.head) return null;
    // Store current head in a variable
    var removedNode = doublyLinkedList.head;
    // Set LinkedList head to current head.next (which can be null)
    doublyLinkedList.head = removedNode.next;
    // If the new head is not null
    if (doublyLinkedList.head) {
      // Set new head's previous to null
      doublyLinkedList.head.previous = null;
    }
    // if list.head is null (list is empty), also set list.tail to null
    if(!doublyLinkedList.head) doublyLinkedList.tail = null;
    // return stored value
    return removedNode.value;
  };

  return doublyLinkedList;
};

var DoublyNode = function(value) {
  var doublyNode = Node(value);
  doublyNode.previous = null;
  return doublyNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
   addToTail():   O(1)
   removeTail():  O(1)
   addToHead():   O(1)
   removeHead():  O(1) 
   contains():    O(n)
 *
 */