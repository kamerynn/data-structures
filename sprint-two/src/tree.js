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

treeMethods.contains = function(target, node){
  node = node || this;
  var wasFound = false;

  if (node.value === target) {
    wasFound = true;
    return wasFound;
  }
  // for loop through children
  for (var i = 0; i < node.children.length; i++) {
    // if contains with target, children[i]
    wasFound = this.contains(target, node.children[i]);
    if (wasFound) {
      break;
    }
  }
  // return wasFound
  return wasFound;
};


/*
 * Complexity: What is the time complexity of the above functions?

   addChild: O(1)
   contains:
      average: O(log(n))
      worst: O(n)
 */
