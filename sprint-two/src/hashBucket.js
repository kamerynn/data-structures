var HashBucket = function() {
  var bucket = DoublyLinkedList();

  bucket.each = function(cb, node) {
    if(bucket.head) {
      node = node || bucket.head;
      cb(node);
      if(node.next) bucket.each(cb, node.next);
    }
  };

  bucket.remove = function(key) {
    var nodeToRemove = null;

    bucket.each(function(node) {
      var tuple = node.value;
      if(tuple.get(0) === key) {
        nodeToRemove = node;
      }
    });

    var prevNode = nodeToRemove.previous;
    var nextNode = nodeToRemove.next;

    if(prevNode) prevNode.next = nextNode;
    if(nextNode) nextNode.previous = prevNode;

    // we removed the only node!
    if(!prevNode && !nextNode) {
      bucket.head = null;
      bucket.tail = null;
    }

    return nodeToRemove;
  };

  return bucket;
};