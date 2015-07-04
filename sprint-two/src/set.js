var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[this._keyGen(item)] = item;
};

setPrototype.contains = function(item){
  return this._keyGen(item) in this._storage;
};

setPrototype.remove = function(item){
  delete this._storage[this._keyGen(item)];
};

// The purpose of keyGen is, right now, to store objects too
// we will need to modify this to store functions
setPrototype._keyGen = function(item) {
  return JSON.stringify(item);
}

/*
 * Complexity: What is the time complexity of the above functions?

    add:      O(1)
    contains: O(1)
    remove:   O(1)
 *   
 */
