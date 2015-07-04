var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numOfTableElements = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    var tuple = this._storage.get(i);
    // if there's space in the tuple
    if (tuple.get(0) < 5) {
      var emptySpot = tuple.get(0);
      tuple.set(emptySpot, k);
      tuple.set(emptySpot + 1, v);
    }

    // if theres no room to put our k, v inside the tuple -> rehash
  } else {
    // debugger;
    var tuple = this._createTuple();

    // tuple.add([k, v])

    tuple.set(1, k);
    tuple.set(2, v);
    // length of tuple (including length value) is at tuple[0]
    tuple.set(0, 3);
    console.log(tuple);
    this._storage.set(i, tuple);
    this._numOfTableElements++;
  }
};

HashTable.prototype.retrieve = function(k){
  var returnValue = null;
  this._doForKeyInTuple(k, function(key, value) {
    returnValue = value;
  });

  return returnValue;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i).each(function(item, index, collection) {
    if (index % 2 === 1) {
      if (item === k) {
        collection[index] = null; // key
        collection[index+1] = null; // value
      }
    }
  });
};

HashTable.prototype._rehash = function() {
  var oldStorage = this._storage;
  this._storage = limitedArray(this._limit * 2)
  // iterate through oldStorage
  //    update this._limit
  //    this.insert(k, oldstorage[i])
};

HashTable.prototype._createTuple = function() {
  return LimitedArray(5);
  //var linkedList = new LinkedList();
  //return linkedList;
};

HashTable.prototype._doForKeyInTuple = function(k, cb) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i).each(function(item, index, collection) {
    if (index % 2 === 1) {
      if (item === k) {
        var key = item;
        var value = collection[index+1];
        cb(key, value);
      }
    }
  });
};

// [k1, v1, k2, v2, k3, v3] <-- k4, v4
// collision > find length, create a new limited array with length = length + 2
// [k1, v1, k2, v2]

// at some index that has no collision: [ , , , , , ]
// at some index that has collision: [key1, value1, key2, value2]
// for (var i = 0; i < collisionArray.length; i + 2) {
//  if collisionArray[i] === keyName -> return collisionArray[i+1];
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */
