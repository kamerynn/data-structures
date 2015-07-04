var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function() {
  this.parent.children.splice(this.parent.children.indexOf(this), 1);
  this.parent = null;
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  return _.some(this.children, function(child) {
    return child.contains(target);
  });
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  _.each(this.children, function(childTree) {
    childTree.traverse(cb);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?

   addChild: O(1)
   contains:
      average: ??
      worst: O(n)
 */
