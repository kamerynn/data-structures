var LinkedList = function(){
  var list = {};
  list.head = null; // set to first node
  list.tail = null; // set to last node

  list.addToTail = function(value){
    // Instantiate a new Node with the given value
    var newTail = Node(value);
    // Set the current tail's pointer to the newly created Node
    if(list.tail) list.tail.next = newTail;
    // If list.head is null (list is empty), set list.head to new tail
    if(list.head === null) list.head = newTail;
    // Set the LinkedList tail to the new Node
    list.tail = newTail;
  };

  list.removeHead = function(){
    // If list is empty, return null
    if(list.head === null) return null;
    // Store current head in a variable
    var removedNode = list.head;
    // Set LinkedList head to current head.next
    list.head = removedNode.next;
    // if list.head is null (list is empty), also set list.tail to null
    if(list.head === null) list.tail = null;
    // return stored value
    return removedNode.value;
  };

  list.contains = function(target, node){
    // if node not provided, default to list.head
    node = node || list.head;
    // check if node.value is equal to target
      // true
        // target is found, return true
      // false
        // if node.next does not exist, return false
        // if not, call contains with target and node.next (recursion)
    if(node.value === target) return true;
    if(node.next === null) return false; // reached end of list, not found
    return list.contains(target, node.next);  
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
   addToTail():   O(1)
   removeHead():  O(1) 
   contains():    O(n)

 */
