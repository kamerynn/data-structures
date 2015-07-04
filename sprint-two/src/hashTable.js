var HashTable = function(){
  this._count = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i); // doubly linked list

  if(!bucket) {
    bucket = HashBucket();
    this._storage.set(i, bucket);
  }

  var found = false;

  // iterate over doubly linked list
  bucket.each(function(node) {
    var tuple = node.value;
    // check if tuple.get(0) === k
    if(tuple.get(0) === k) {
      // overwrite tuple value
      tuple.set(1, v);
      found = true;
    }
  });

  // if key was not found, need to add to bucket
  if(!found) {
    var tuple = LimitedArray(2);
    tuple.set(0, k);
    tuple.set(1, v);
    bucket.addToTail(tuple);
    this._count++;
  }

  if (this._count > this._limit * 0.75) {
    this._rehash(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket) return null;

  var returnValue = null;

  bucket.each(function(node) {
    var tuple = node.value;
    if (tuple.get(0) === k) {
      returnValue = tuple.get(1);
    }
  });

  return returnValue;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket) return null;

  if(bucket.remove(k)) this._count--;

  if (this._count < this._limit * 0.25) {
    this._rehash(this._limit / 2);
  }
};

HashTable.prototype._rehash = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._count = 0;
  this._limit = newLimit;
  var context = this;

  // iterate through oldStorage
  oldStorage.each(function(bucket) {
    if (bucket) {
      bucket.each(function(node) {
        var tuple = node.value;
        context.insert(tuple.get(0), tuple.get(1));
      });
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert():
    avg:    O(1)
    worst:  O(n)
  retrieve():
    avg:    O(1)
    worst:  O(n)
  remove():
    avg:    O(1)
    worst:  O(n)
 *
 */
