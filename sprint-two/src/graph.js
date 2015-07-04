var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  if(!this.contains(node)) this.nodes[node] = {};
};

Graph.prototype.contains = function(node){
  return node in this.nodes;
};

Graph.prototype.removeNode = function(node){
  _.each(this.nodes[node], function(_value, connection) {
    this.removeEdge(connection, node);
  });
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return toNode in this.nodes[fromNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  (this.nodes[fromNode][toNode] = true) && (this.nodes[toNode][fromNode] = true);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode] && delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(connections, node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?

   addNode:     O(1)
   contains:    O(1)
   removeNode:  O(n)
   hasEdge:     O(1)
   addEdge:     O(1)
   removeEdge:  O(1)
   forEachNode: O(n)

 *
 */