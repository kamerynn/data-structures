var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  return _.some(this.children, function(child) {
    return child.contains(target);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?

   addChild: O(1)
   contains:
      average: ??
      worst: O(n)
 */
