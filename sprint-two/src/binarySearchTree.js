var BinarySearchTree = function(value){
  // create object with Object.create()
  var someInstance = Object.create(BinarySearchTree.prototype);
  // create any properties for object
  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  // return object
  return someInstance;
};

BinarySearchTree.prototype.insert = function(value) {
  // compare value with this.value
  if(value === this.value) return true;
  // if lesser
  if(value < this.value) {
    // if this.left exists
    if(this.left) {
      // call this.left.insert with value
      this.left.insert(value);
    // if this.left does not exist
    } else {
      // create new BST with value and set to this.left
      this.left = BinarySearchTree(value);
    }
  // if greater
  } else if(value > this.value) {
    // if this.right exists
    if(this.right) {
      // call this.right.insert with value
      this.right.insert(value);
    // if this.right does not exist
    } else {
      // create new BST with value and set to this.right
      this.right = BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // compare value with this.value, return true if equal
  if(value === this.value) return true;
  // if lesser
  if(value < this.value) {
    // if this.left is null, return false
    if(!this.left) return false;
    // return this.left.contains with value
    return this.left.contains(value);
  // if greater
  } else if(value > this.value) {
    // if this.right is null, return false
    if(!this.right) return false;
    // return this.right.contains with value
    return this.right.contains(value);
  }
  // for invalid inputs
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  // if this.left exists, this.left.depthFirstLog(cb)
  if(this.left) this.left.depthFirstLog(cb);
  // if this.right exists, this.right.depthFirstLog(cb)
  if(this.right) this.right.depthFirstLog(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?

   insert:
    avg:    O(log(n))
    worst:  O(n)
   contains:
    avg:    O(log(n))
    worst:  O(n)
   depthFirstLog: O(n)

 *
 */
